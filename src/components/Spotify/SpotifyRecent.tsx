import * as React from 'react'
import { FC } from 'react'
import { getImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export interface ISpotifyTrack {
  order: number
  track: {
    artistString: string
    name: string
    uri: string
    image: {
      localFile: IGatsbyImageData
    }
  }
}

const SpotifyRecent: FC<{ tracks: Array<ISpotifyTrack> }> = ({ tracks }) => (
  <div>
    <ol className="space-y-1 divide-y divide-solid divide-slate-900 divide-opacity-10 dark:divide-slate-300 sm:space-y-2">
      {tracks.map(({ track }, index) => (
        <li className="flex flex-row items-center px-1 pt-1 dark:border-opacity-20 sm:pt-2">
          <p className="text-lg font-bold lining-nums text-gray-400">{index + 1}</p>
          <p className="ml-4 flex flex-col">
            <a href={track.uri} className="hover:text-brand text-md font-semibold">
              <span>{track.name}</span>
            </a>
            <span className="text">{track.artistString}</span>
          </p>
          <GatsbyImage
            className="my-auto ml-auto h-14 w-14"
            image={getImage(track.image.localFile) as IGatsbyImageData}
            alt="Caricature Waving"
          />
        </li>
      ))}
    </ol>
  </div>
)

export default SpotifyRecent
