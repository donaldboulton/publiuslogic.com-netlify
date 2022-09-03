import * as React from 'react'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const ballStyle = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  backgroundColor: 'transparent',
  borderRadius: '0.5rem',
}
const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeOut',
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: 'easeOut',
    repeatDelay: 0.8,
  },
}

export default function BouncingBall() {
  return (
    <>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <LazyMotion features={loadFeatures}>
          <m.span
            style={ballStyle}
            transition={bounceTransition}
            animate={{
              y: ['100%', '-100%'],
              backgroundColor: ['#ff6699', '#6666ff'],
            }}
          />
        </LazyMotion>
      </div>
    </>
  )
}
