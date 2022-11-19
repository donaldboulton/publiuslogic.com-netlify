import * as React from 'react'

const ListGrid = ({ children, ...rest }) => {
  return (
    <div
      className="mt-10 mb-4 space-y-12 text-slate-900 dark:text-slate-200 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 xl:grid-cols-3"
      {...rest}
    >
      {children}
    </div>
  )
}

export default ListGrid
