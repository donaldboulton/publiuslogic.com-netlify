import * as React from 'react'

const LeftText = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="justify-left flex text-2xl italic text-fuchsia-800 underline decoration-fuchsia-600 decoration-wavy underline-offset-8 transition duration-300 dark:text-fuchsia-600 dark:decoration-fuchsia-600"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default LeftText
