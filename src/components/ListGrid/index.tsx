import * as React from 'react'

const ListGrid = ({ children, ...rest }) => {
  return (
    <div
      className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 xl:grid-cols-3 lg:gap-x-6 lg:mt-0 mb-4 text-black dark:text-white"
      {...rest}
    >
      {children}
    </div>
  )
}

export default ListGrid
