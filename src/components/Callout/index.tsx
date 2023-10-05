import * as React from 'react'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

const loadFeatures = () => import('@/components/FramerFeatures').then((res) => res.default)

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
        className="t-4 relative mb-4 rounded-lg border-b-8 border-l-2 border-r-8 border-t-2 border-violet-500 bg-slate-950 px-6 py-2 font-medium opacity-70"
        {...rest}
      >
        <aside className="absolute -right-7 -top-9 mb-4 mt-4 flex rounded-full border-4 border-violet-500 bg-slate-950 p-2 text-violet-500">
          <InformationCircleIcon className="h-6 w-6" />
        </aside>
        {children}
      </m.div>
    </LazyMotion>
  )
}
