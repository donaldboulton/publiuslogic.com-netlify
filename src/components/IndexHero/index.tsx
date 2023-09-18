import * as React from 'react'
import { useState } from 'react'
import { LazyMotion, m } from 'framer-motion'
import AnimatedText from '@/components/AnimatedCharacters'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

export default function IndexHero() {
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
    <div className="relative mx-auto mb-4 h-96 w-full text-slate-300 md:mb-0">
      <div className="absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-b from-slate-700"></div>
      <StaticImage
        className="absolute left-0 top-0 z-0 h-full w-full"
        formats={['auto', 'webp']}
        src="../../../static/images/jpg/dbbg.jpg"
        quality={95}
        alt="Home Picture"
        area-label="Home Picture"
        loading="eager"
      />
      <LazyMotion features={loadFeatures}>
        <m.div
          className="absolute left-3 top-16 z-20 p-4"
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
