import * as React from 'react'

const VideoWrapper = ({ children, ...delegated }) => {
  return (
    <>
      <div className="flex-initial w-64 ml-4 bg-slate-300 dark:bg-slate-900 rounded-lg p-2 border-2 border-purple-900" {...delegated}>
        {children}
      </div>
    </>
  )
}

export default VideoWrapper
