import * as React from 'react'

const ColumnGridFour = ({ children }) => {
  return (
    <>
     <div className="grid grid-flow-row grid-flow-col auto-rows-max max-h-80 px-2 grid-rows-3 sm:grid-rows-1 gap-y-2 items-center">
        {children}
      </div>
    </>
  )
}

export default ColumnGridFour
