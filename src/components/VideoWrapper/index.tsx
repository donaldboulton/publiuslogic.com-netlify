import * as React from 'react'

const VideoWrapper = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="ml-4 w-64 flex-initial rounded-lg border-2 border-wine-300 bg-[#121212] p-2"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default VideoWrapper
