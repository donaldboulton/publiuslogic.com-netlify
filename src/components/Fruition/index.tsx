import * as React from 'react'
import { ref, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

export default function Fruition() {
  const fruitionContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const item = {
    initial: { y: 20, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
    },
  }

  const useAnimateOnInView = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
      if (!inView) {
        controls.start('hidden')
      }
    }, [controls, inView])

    return { ref }
  }

  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.section variants={fruitionContainer}>
          <m.div
            ref={ref}
            variants={variants}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative flex flex-col min-w-0 break-words text-white w-full mb-6 shadow-lg rounded-lg bg-rose-600">
              <StaticImage
                className="w-full align-middle rounded-t-lg"
                formats={['auto', 'webp']}
                quality={95}
                src="../../../static/img/jesus.jpg"
                alt="PubliusLogic"
                loading="eager"
              />
              <div className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: '95px',
                    top: '-94px',
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-rose-600 shadow-lg shadow-rose-500/50 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">Fruition is Soon, "Nov 15 2022"!</h4>
                <div className="text-lg font-light mt-2 text-white">
                  All Time will be coming to fruition. Revelation 22:12,
                  <p>
                    And, behold, I come quickly; and my reward is with me, to give every man according as his work shall
                    be.
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </m.section>
      </LazyMotion>
    </>
  )
}
