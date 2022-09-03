import * as React from 'react'

const Center = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="text-2xl text-fuchsia-800 dark:text-fuchsia-600 flex justify-center italic transition duration-300 underline underline-offset-8 decoration-wavy decoration-fuchsia-600 dark:decoration-fuchsia-600"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default Center
