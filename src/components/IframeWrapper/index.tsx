import * as React from 'react'

const IframeWrapper = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="w-full aspect-video max-w-screen-md flex-initial rounded-lg border-2 border-wine-300 bg-[#121212] p-2"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default IframeWrapper
