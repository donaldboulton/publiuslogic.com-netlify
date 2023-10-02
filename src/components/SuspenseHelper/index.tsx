import * as React from 'react'
import { ReactNode, useEffect, useState, Suspense } from 'react'

type Props = {
  fallback?: ReactNode
  children: ReactNode
}

export const SuspenseHelper: React.FC<Props> = ({ fallback, children }) => {
  const [isMounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    if (!isMounted) {
      setMounted(true)
    }
  })

  return <Suspense fallback={fallback}>{!isMounted ? fallback : children}</Suspense>
}
