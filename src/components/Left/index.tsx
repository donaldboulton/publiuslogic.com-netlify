import * as React from 'react'

const Left = ({ children, ...delegated }) => {
  return (
    <>
      <div className="justify-left flex items-stretch" {...delegated}>
        {children}
      </div>
    </>
  )
}

export default Left
