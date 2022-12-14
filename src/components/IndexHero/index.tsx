import * as React from 'react'
import { useState } from 'react'
import { LazyMotion, m } from 'framer-motion'
import AnimatedText from '@/components/AnimatedCharacters'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface IndexHeroProps {
  image?: string
}

import defaultImage from '../../../static/images/jpg/dbbg.jpg'

const IndexHero = ({ image }: IndexHeroProps) => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [replay, setReplay] = useState(true)
  const placeholderText = [
    { type: 'heading1', text: 'PubliusLogic' },
    {
      type: 'heading2',
      text: 'Publishing Logic & Gods Truth!',
    },
  ]
  const headingContainer = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }
  return (
    <div className="relative mx-auto mb-4 h-96 w-full max-w-screen-xl text-white md:mb-0">
      <div className="absolute left-0 bottom-0 z-10 h-full w-full bg-gradient-to-b from-slate-700"></div>
      <img
        src={image ? image : defaultImage}
        alt="featured image"
        className="absolute left-0 top-0 z-0 h-full w-full"
      />
      <LazyMotion features={loadFeatures}>
        <m.div
          className="absolute top-16 left-3 z-20 p-4"
          initial="hidden"
          animate={replay ? 'visible' : 'hidden'}
          variants={headingContainer}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />
            })}
          </div>
        </m.div>
      </LazyMotion>
    </div>
  )
}
export default IndexHero
