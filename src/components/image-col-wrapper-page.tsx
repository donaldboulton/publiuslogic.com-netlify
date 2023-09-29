import * as React from 'react'
import { ReactNode } from 'react'

interface ImageColWrapperProps {
  children?: ReactNode
}

const ImageColWrapperPage = ({ children }: ImageColWrapperPageProps) => {
  return (
    <>
      <div className="flex content-center justify-center mb-4 mt-4">{children}</div>
    </>
  )
}

export default ImageColWrapperPage
