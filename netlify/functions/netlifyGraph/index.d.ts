// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string
  /**
   * The siteId to use for the request
   * @default process.env.NETLIFY_SITE_ID
   */
  siteId?: string
}

export type WebhookEvent = {
  body: string
  headers: Record<string, string | null | undefined>
}

export type GraphQLError = {
  path: Array<string | number>
  message: string
  extensions: Record<string, unknown>
}

export type CurrentlyPlaying = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    me: {
      spotify: {
        player: {
          /**
           * Progress into the currently playing track. Can be `null` (e.g. If private session is enabled this will be `null`).
           */
          progressMs: number
          /**
           * If something is currently playing.
           */
          isPlaying: boolean
          /**
           * off, track, context
           */
          repeatState: 'OFF' | 'TRACK' | 'CONTEXT'
          /**
           * If shuffle is on or off
           */
          shuffleState: boolean
          /**
           * The currently playing track. Can be `null` (e.g. If private session is enabled this will be `null`).
           */
          item: {
            /**
             * The name of the track.
             */
            name: string
            /**
             * The track length in milliseconds.
             */
            durationMs: number
            /**
             * The album on which the track appears. The album object includes a link in href to full information about the album.
             */
            album: {
              /**
               * The cover art for the album in various sizes, widest first.
               */
              images: Array<{
                /**
                 * The image height in pixels. If unknown: `null` or not returned.
                 */
                height: number
                /**
                 * The source URL of the image.
                 */
                url: string
                /**
                 * The image width in pixels. If unknown: `null` or not returned.
                 */
                width: number
              }>
              /**
               * The name of the album. In case of an album takedown, the value may be an empty string.
               */
              name: string
            }
            /**
             * The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
             */
            artists: Array<{
              /**
               * The name of the artist.
               */
              name: string
            }>
            /**
             * The Spotify URI for the track.
             */
            uri: string
          }
        }
      }
    }
  }
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>
}

/**
 * An example query to start with.
 */
export function fetchCurrentlyPlaying(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<CurrentlyPlaying>
