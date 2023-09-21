import * as React from 'react'
import { ReactNode } from 'react'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface CalloutDangerProps {
  children: ReactNode
}

export default function CalloutDanger({ children, ...rest }: CalloutDangerProps) {
  const [ref7, isVisible7] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants7 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        className="opacity-75"
        key="calloutDanger"
        ref={ref7}
        animate={isVisible7 ? 'visible' : 'hidden'}
        variants={variants7}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-slate-950 t-4 mb-4 px-6 py-2 font-medium rounded-lg border-l-2 border-t-2 border-wine-400 border-r-8 border-b-8 opacity-70"
        {...rest}
      >
        <aside className="absolute flex -top-9 -right-7 bg-slate-950 rounded-full p-2 mt-4 mb-4 border-4 border-wine-300 text-wine-300">
          <BellAlertIcon className="h-6 w-6 text-red-600" />
        </aside>
        {children}
      </m.div>
    </LazyMotion>
  )
}
