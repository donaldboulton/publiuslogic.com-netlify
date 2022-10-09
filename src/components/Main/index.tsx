import * as React from 'react'
import { ReactNode } from 'react'

interface MainProps {
    children: ReactNode
  }
  
  const Main = ({ children }: MainProps) => {
  return (
    <>
      <main
      >
        {children}
      </main>
    </>
  )
}

export default MAin
