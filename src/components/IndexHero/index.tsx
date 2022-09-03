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
    <div className="mb-4 md:mb-0 w-full max-w-screen-xl mx-auto relative h-96 text-white">
      <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-slate-700"></div>
      <img
        src={image ? image : defaultImage}
        alt="featured image"
        className="absolute left-0 top-0 w-full h-full z-0"
      />
      <LazyMotion features={loadFeatures}>
        <m.div
          className="p-4 absolute top-16 left-3 z-20"
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
