import * as React from 'react'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface CalloutLabelProps {
  children: ReactNode
  label: string
}

export default function CalloutLabel({ children, label, ...rest }: CalloutLabelProps) {
  const [ref8, isVisible8] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants8 = {
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
        key="calloutLabel"
        ref={ref8}
        animate={isVisible8 ? 'visible' : 'hidden'}
        variants={variants8}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-slate-950 t-4 mb-4 px-6 py-2 rounded-lg border-l-2 border-t-2 border-purple-500 border-r-8 border-b-8 opacity-70"
        {...rest}
      >
        <aside className="absolute flex -top-9 -right-7 bg-slate-950 rounded-full p-2 mt-4 mb-4 border-4 border-violet-500 text-violet-500">
          {label}
        </aside>
        {children}
      </m.div>
    </LazyMotion>
  )
}
