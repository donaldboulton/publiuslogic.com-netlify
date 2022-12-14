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
