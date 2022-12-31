import * as React from 'react'

const Left = ({ children, ...delegated }) => {
  return (
    <>
      <div className="flex justify-left items-stretch" {...delegated}>
        {children}
      </div>
    </>
  )
}

export default Left
