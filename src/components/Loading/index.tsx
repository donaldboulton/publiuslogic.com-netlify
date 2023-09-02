import * as React from 'react'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const Loading = ({ children, ...delegated }) => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const loadingCircleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  }

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: 'easeInOut',
  }
  return (
    <>
      <div className="center text-wine-300">
        <LazyMotion features={loadFeatures}>
          <m.div style={loadingContainer} variants={loadingContainerVariants} initial="start" animate="end">
            <m.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
            <m.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
            <m.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
          </m.div>
        </LazyMotion>
      </div>
    </>
  )
}

export default Loading
