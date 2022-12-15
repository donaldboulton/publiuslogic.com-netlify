import * as React from 'react'
import { FC } from 'react'
import './SpotifyCurrentlyPlaying.css'
import useCurrentlyPlaying from '../../api/useCurrentlyPlaying'

const SpotifyCurrentlyPlaying: FC = () => {
  const [playingItem, fetching] = useCurrentlyPlaying()

  const isPlaying = playingItem && playingItem.isPlaying
  return isPlaying ? (
    <div className="fixed bottom-4 right-4 flex min-w-[250px] items-center justify-start rounded bg-slate-300 p-2 text-slate-900 drop-shadow-md dark:bg-slate-800 dark:text-slate-200">
      <div className="relative">
        <div className="pr-2">
          <a href={playingItem.item.uri}>
            <img
              className="h-16 rounded border border-slate-400 dark:border-slate-900"
              src={playingItem.item.album.images.sort((image1, image2) => image1.height - image2.height)[0].url}
              alt={playingItem.item.album.name}
            />
          </a>
        </div>
        <div className="eq-container absolute bottom-0 left-0">
          <span className="bar b1" />
          <span className="bar b2" />
          <span className="bar b3" />
          <span className="bar b4" />
          <span className="bar b5" />
        </div>
      </div>
      <div>
        <div className="font-bold">{playingItem.item.name}</div>
        <div className="text-sm">{playingItem.item.artists.map(artist => artist.name).join(', ')}</div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default SpotifyCurrentlyPlaying
