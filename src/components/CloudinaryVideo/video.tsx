import * as React from 'react'
import { ReactNode } from 'react'
import { AdvancedVideo, lazyload } from '@cloudinary/react'
import { videoCodec } from '@cloudinary/url-gen/actions/transcode'
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec'
import VideoWrapper from './wrapper'

interface VideoChildrenProps {
  children: ReactNode
  video: string
}

const cld = new Cloudinary({
  cloud: {
    cloudName: 'mansbooks',
  },
})

export default function VideoChildren({ children, video }: VideoChildrenProps) {
  const sources = [
    {
      type: 'mp4',
      codecs: ['avc1.4d002a'],
      transcode: videoCodec(auto()),
    },
    {
      type: 'webm',
      codecs: ['vp8', 'vorbis'],
      transcode: videoCodec(vp9()),
    },
  ]

  return (
    <>
      <VideoWrapper>
        <AdvancedVideo
          cldVid={cld}
          sources={sources}
          className="w-full opacity-75"
          ref={videoEl}
          controls
          autoPlay
          loop
          plugins={[lazyload()]}
        >
          {video}
        </AdvancedVideo>
      </VideoWrapper>
    </>
  )
}
