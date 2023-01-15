import * as React from 'react'

const VideoWrapper = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="ml-4 w-64 flex-initial rounded-lg border-2 border-purple-900 bg-slate-300 p-2 dark:bg-slate-900"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default VideoWrapper
