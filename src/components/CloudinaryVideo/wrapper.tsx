import * as React from 'react'
import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="text-center w-full bg-transparent bg-primary-dark space-y-reverse opacity-50">{children}</div>
}

export default Wrapper
