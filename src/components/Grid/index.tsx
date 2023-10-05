import * as React from 'react'

const Grid = ({ children }) => {
  return (
    <>
      <div className="container m-auto grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">{children}</div>
    </>
  )
}

export default Grid
