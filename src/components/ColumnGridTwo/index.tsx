import * as React from 'react'

const ColumnGridTwo = ({ children }) => {
  return (
    <>
     <div className="grid grid-flow-row grid-flow-col auto-rows-max px-2 grid-rows-1 sm:grid-rows-1 gap-y-1 items-center">
        {children}
      </div>
    </>
  )
}

export default ColumnGridTwo
