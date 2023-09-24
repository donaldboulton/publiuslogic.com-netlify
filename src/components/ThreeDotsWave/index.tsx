import * as React from 'react'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const LoadingDot = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  backgroundColor: 'white',
  borderRadius: '50%',
}

const LoadingContainer = {
  width: '10rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around',
}

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const DotVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
}

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
}

export default function ThreeDotsWave() {
  return (
    <LazyMotion features={loadFeatures}>
      <div
        style={{
          paddingTop: '5rem',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <m.div style={LoadingContainer} variants={ContainerVariants} initial="initial" animate="animate">
          <m.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
          <m.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
          <m.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
        </m.div>
      </div>
    </LazyMotion>
  )
}
