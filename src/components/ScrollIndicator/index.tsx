import * as React from 'react'
import { useState, useEffect } from 'react'
import { LazyMotion, m, useScroll, useSpring, useTransform } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const ScrollIndicator = () => {
  const [isComplete, setIsComplete] = useState(false)
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange])

  return (
    <div className="fixed -right-1 md:-right-1 z-10 top-2/4 w-20 h-20 opacity-50">
      <LazyMotion features={loadFeatures}>
        <svg className="z-30 top-2 left-1 w-20 h-20 text-purple-500 opacity-100" viewBox="0 0 60 60">
          <m.path
            fill="none"
            strokeWidth="5"
            stroke="#a855f7"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1,
            }}
          />
          <m.path
            fill="none"
            strokeWidth="5"
            stroke="#a855f7"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </LazyMotion>
    </div>
  )
}

export default ScrollIndicator
