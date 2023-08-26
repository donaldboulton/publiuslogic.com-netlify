import * as React from 'react'
import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="w-full space-y-reverse bg-primary-dark bg-transparent text-center opacity-50">{children}</div>
}

export default Wrapper
