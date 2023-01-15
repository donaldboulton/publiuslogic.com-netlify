import * as React from 'react'

const ColumnGridThree = ({ children }) => {
  return (
    <>
      <div className="grid grid-flow-row grid-flow-col auto-rows-max grid-rows-3 items-center gap-y-2 rounded-lg border border-l-2 border-pink-500 px-2 sm:grid-rows-1">
        {children}
      </div>
    </>
  )
}

export default ColumnGridThree
