import * as React from 'react'
import { forwardRef, useMemo } from 'react'
import { LazyMotion, m, HTMLMotionProps } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
  const onTheRight = { x: '100%' }
  const inTheCenter = { x: 0 }
  const onTheLeft = { x: '-100%' }

  const transition = { duration: 0.6, ease: 'easeInOut' }

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        className="max-h-[100%] overflow-y-auto"
        ref={ref}
        initial={onTheRight}
        animate={inTheCenter}
        exit={onTheLeft}
        transition={transition}
        {...rest}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default forwardRef(PageTransition)
