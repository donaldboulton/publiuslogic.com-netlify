import * as React from 'react'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface CalloutProps {
  children: ReactNode
}

export default function Callout({ children, ...rest }: CalloutProps) {
  const [ref6, isVisible6] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants6 = {
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
        key="callout"
        ref={ref6}
        animate={isVisible6 ? 'visible' : 'hidden'}
        variants={variants6}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-slate-950 t-4 mb-4 px-6 py-2 rounded-lg font-medium border-l-2 border-t-2 border-violet-500 border-r-8 border-b-8 opacity-70"
        {...rest}
      >
        <aside className="absolute flex -top-9 -right-7 bg-slate-950 rounded-full p-2 mt-4 mb-4 border-4 border-violet-500 text-violet-500">
          <InformationCircleIcon className="h-6 w-6" />
        </aside>
        {children}
      </m.div>
    </LazyMotion>
  )
}
