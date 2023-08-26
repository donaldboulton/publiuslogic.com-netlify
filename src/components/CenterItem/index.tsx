import * as React from 'react'

const CenterItem = ({ children, ...delegated }) => {
  return (
    <>
      <div className="center items-stretch" {...delegated}>
        {children}
      </div>
    </>
  )
}

export default CenterItem
