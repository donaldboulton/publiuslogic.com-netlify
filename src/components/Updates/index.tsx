import * as React from 'react'
import { ref, useEffect } from 'react'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

export default function Updates() {
  const updatesContainer = {
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

  const [ref6, isVisible6] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })
  const variants6 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -300,
    },
  }
  return (
    <LazyMotion features={loadFeatures}>
      <m.section variants={updatesContainer}>
        <m.div
          ref={ref6}
          variants={variants6}
          animate={isVisible6 ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg">
            <div className="flex-auto p-5 m-2 lg:p-10t text-white">
              <h4 className="text-2xl mb-2 text-center font-semibold text-slate-200 underline underline-offset-8 decoration-wavy decoration-fuchsia-600">
                Update's To Creation, and Virtue!
              </h4>
              <div className="leading-relaxed mt-1 mb-4 text-center text-slate-200">
                Before 11/15/2022: I will be a little more explanatory on the Creation of all.
                <p>Add some input from my Angel of Love to Virtue!</p>
              </div>
              <p className="leading-relaxed mt-1 mb-20 text-center text-slate-200">
                Final Trinity Works.{' '}
                <span className="text-center underline underline-offset-4 decoration-wavy decoration-fuchsia-600">
                  <Link to="/blog/trinity-of-man" rel="noopener noreferrer">
                    {' '}
                    The Trinity Of Man!
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </m.div>
      </m.section>
    </LazyMotion>
  )
}
