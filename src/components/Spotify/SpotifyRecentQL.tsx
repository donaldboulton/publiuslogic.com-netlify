import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GraphQLType } from '../../@types/ql'
import SpotifyRecent, { ISpotifyTrack } from './SpotifyRecent'

const RECENT_QL_ENDPOINT = 'allSpotifyRecentTrack' as const

const SpotifyRecentQL = () => {
  const recentQueryData = useStaticQuery<GraphQLType<typeof RECENT_QL_ENDPOINT, Array<ISpotifyTrack>>>(graphql`
    {
      allSpotifyRecentTrack(sort: { order: ASC }, limit: 10) {
        nodes {
          order
          track {
            artistString
            name
            uri
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 128)
                }
              }
            }
          }
        }
      }
    }
  `)
  const recentData = recentQueryData[RECENT_QL_ENDPOINT].nodes

  return <SpotifyRecent tracks={recentData} />
}

export default SpotifyRecentQL
