import * as React from 'react'
import { useRef, ReactNode } from 'react'
import { useInView, LazyMotion, m, domAnimation } from 'framer-motion'

interface SectionProps {
  children: ReactNode
}

const Section = ({ children }: SectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <LazyMotion features={domAnimation}>
      <m.section ref={ref}>
        <m.span
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          {children}
        </m.span>
      </m.section>
    </LazyMotion>
  )
}
export default Section
