import * as React from 'react'

const IframeWrapperLarge = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="w-[640px] h-[360px] flex-initial rounded-lg bg-[#121212] border-2 border-wine-300 p-2"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default IframeWrapperLarge
