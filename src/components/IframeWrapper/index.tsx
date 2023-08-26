import * as React from 'react'

const IframeWrapper = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="w-96 flex-initial rounded-lg bg-[#121212] border-2 border-wine-300 p-2"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default IframeWrapper
