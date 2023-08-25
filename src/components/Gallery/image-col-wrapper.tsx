import React from 'react'
import { ReactNode } from 'react'

interface ImageColWrapperProps {
  children?: ReactNode
  onClick: () => void
}

const ImageColWrapper = ({ children, onClick }: ImageColWrapperProps) => {
  return (
    <div onClick={onClick}>
      <div className="flex min-h-screen justify-center">{children}</div>
    </div>
  )
}

export default ImageColWrapper
