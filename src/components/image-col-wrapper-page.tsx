import * as React from 'react'
import { ReactNode } from 'react'

interface ImageColWrapperProps {
  children?: ReactNode
}

const ImageColWrapperPage = ({ children }: ImageColWrapperPageProps) => {
  return (
    <>
      <div className="mb-4 mt-4 flex content-center justify-center">{children}</div>
    </>
  )
}

export default ImageColWrapperPage
