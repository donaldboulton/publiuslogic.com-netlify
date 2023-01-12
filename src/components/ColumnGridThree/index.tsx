import * as React from 'react'

const ColumnGridThree = ({ children }) => {
  return (
    <>
     <div className="grid grid-flow-row grid-flow-col auto-rows-max border border-l-2 border-pink-500 rounded-lg px-2 grid-rows-3 sm:grid-rows-1 gap-y-2 items-center">
        {children}
      </div>
    </>
  )
}

export default ColumnGridThree