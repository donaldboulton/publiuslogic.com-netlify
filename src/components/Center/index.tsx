import * as React from 'react'

const Center = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="mb-2 flex justify-center pb-4 text-2xl italic text-fuchsia-800 underline decoration-wine-200 decoration-wavy underline-offset-8 transition duration-300 dark:text-wine-300 dark:decoration-wine-200"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default Center
