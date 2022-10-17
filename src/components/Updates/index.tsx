import * as React from 'react'
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
          <div className="relative flex w-full min-w-0 flex-col break-words rounded-lg shadow-lg">
            <div className="lg:p-10t m-2 flex-auto p-5 text-white">
              <h4 className="mb-2 text-center text-2xl font-semibold text-slate-200 underline decoration-fuchsia-600 decoration-wavy underline-offset-8">
                Update's To Creation, and Virtue!
              </h4>
              <div className="mt-1 mb-4 text-center leading-relaxed text-slate-200">
                Before 11/15/2022: I will be a little more explanatory on the Creation of all.
                <p>Add some input from my Angel of Love to Virtue!</p>
              </div>
              <p className="mt-1 mb-20 text-center leading-relaxed text-slate-200">
                Final Trinity Works.{' '}
                <span className="text-center underline decoration-fuchsia-600 decoration-wavy underline-offset-4">
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
