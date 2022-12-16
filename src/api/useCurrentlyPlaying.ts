import * as React from 'react'
import { useEffect, useState } from 'react'

export interface SpotifyImage {
  height: number
  width: number
  url: string
}

export interface SpotifyAlbum {
  images: Array<SpotifyImage>
  name: string
}

export interface SpotifyTrackItem {
  name: string
  durationMs: number
  uri: string
  album: SpotifyAlbum
  artists: Array<{ name: string }>
}

export interface SpotifyPlayer {
  progressMs: number
  isPlaying: boolean | undefined
  item: SpotifyTrackItem
}

export interface CurrentlyPlayingError {
  message: string
  path: Array<string>
}

export interface CurrentlyPlayingData {
  me: {
    spotify: {
      player: SpotifyPlayer
    }
  }
}

export interface CurrentlyPlayingAPI {
  success: boolean
  CurrentlyPlayingErrors?: Array<CurrentlyPlayingError>
  CurrentlyPlayingData: CurrentlyPlayingData
}

const fetchSpotifyPlayer = async () => {
  const URL = '/.netlify/functions/__api'
  const OPTIONS = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }
  const response = await fetch(URL, OPTIONS)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data: CurrentlyPlayingAPI = await response.json()
  return data
}

type PollingMode = 'STATIC' | 'CALCULATED'
const BUFFER_TIME = 5000
const WAIT_ON_ERROR = 60000
const POLLING_RATE = 10000
const POLLING_MODE: PollingMode = 'CALCULATED'

const useCurrentlyPlaying = () => {
  const [playingItem, setPlayingItem] = useState<SpotifyPlayer>()
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    let timeoutId: number
    const fetchPlayingState = async () => {
      let refreshTimeInMs = WAIT_ON_ERROR
      setFetching(true)
      try {
        const fetchResult = await fetchSpotifyPlayer()
        if (fetchResult.CurrentlyPlayingData && !fetchResult.CurrentlyPlayingErrors) {
          const { player } = fetchResult.CurrentlyPlayingData.me.spotify
          setPlayingItem(player)
          if (POLLING_MODE === 'STATIC') {
            refreshTimeInMs = POLLING_RATE
          } else {
            refreshTimeInMs = player.item.durationMs - player.progressMs + BUFFER_TIME
          }
        }
      } catch (e) {
        /* Gimmick */
      }
      setFetching(false)
      timeoutId = window.setTimeout(fetchPlayingState, refreshTimeInMs)
    }
    fetchPlayingState()
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [setPlayingItem, setFetching])

  return [playingItem, fetching] as const
}

export default useCurrentlyPlaying
