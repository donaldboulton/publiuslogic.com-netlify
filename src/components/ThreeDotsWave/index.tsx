import * as React from 'react'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const loadingContainer = {
  width: '2rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'space-around',
}

const loadingCircle = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: 'blue',
  borderRadius: '0.25rem',
}
const loadingCircleOne = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: '#620024',
  borderRadius: '0.25rem',
}
const loadingCircleTwo = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: 'pink',
  borderRadius: '0.25rem',
}

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
    y: '50%',
  },
  end: {
    y: '150%',
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
}

function ThreeDotsWave() {
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.div style={loadingContainer} variants={loadingContainerVariants} initial="start" animate="end">
          <m.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
          <m.span style={loadingCircleOne} variants={loadingCircleVariants} transition={loadingCircleTransition} />
          <m.span style={loadingCircleTwo} variants={loadingCircleVariants} transition={loadingCircleTransition} />
        </m.div>
      </LazyMotion>
    </>
  )
}

export default ThreeDotsWave
