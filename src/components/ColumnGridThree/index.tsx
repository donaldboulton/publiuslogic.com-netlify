import * as React from 'react'

const ColumnGridTwo = ({ children }) => {
  return (
    <>
     <div className="grid grid-flow-row grid-flow-col auto-rows-max border border-l-2 border-rose-900 rounded-lg px-2 grid-rows-3 sm:grid-rows-1 gap-y-2 items-center">
        {children}
      </div>
    </>
  )
}

export default ColumnGridTwo
