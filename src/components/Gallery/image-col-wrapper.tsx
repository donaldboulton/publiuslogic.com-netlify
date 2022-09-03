import * as React from 'react'
import { ReactNode } from 'react'

interface ImageColWrapperProps {
  children?: ReactNode
  onClick: () => void
}

const ImageColWrapper = ({ children, onClick }: ImageColWrapperProps) => {
  return (
    <div onClick={onClick}>
      <div className="min-h-screen flex items-center justify-center">{children}</div>
    </div>
  )
}

export default ImageColWrapper
