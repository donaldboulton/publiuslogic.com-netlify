import * as React from 'react'
import { LazyMotion, m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ClockIcon, SparklesIcon, PuzzlePieceIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

const loadFeatures = () => import('@/components/FramerFeatures').then((res) => res.default)

const features = [
  {
    name: 'Creation of All',
    description:
      'Been waiting around all of my life to start this. Kind of got complacent. Then next thing I know the Trinity was together and I was on my way! Matthew 6 But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you. Your room or heart is inside of you, lose out this world and sleep, for only in your sleep is when you can communicate with father in, "A Secret", from you and all others. To a secret sleep with love and truth in your hearts!',
    icon: SparklesIcon,
  },
  {
    name: 'Laws of this World',
    description:
      'At PubliusLogic we Publish Logic as Common Sense. Publius was taken from The Federalist Papers and my extensive studies Of the USA Books at Large = USA Congressional Reports most of my focus was on Books I and II, including a lot of Notes and Letters from our Founding Fathers as well as reading all of our Founding Fathers Publius publications and extensively studying the true intent of some. Logic part of the name came from Thomas Payne in his book, "Common Sense", = Logic',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Saving Mankind',
    description:
      'The destruction of all Humanity is eminent. You are over populating the Planet at a accelerating rate. If you do not stop soon you will all be die from starvation. Mother Earth is a Fallen Angel, the Devil, Her job as Earth is to give life for mankind as in your flesh. You are completely disrespecting Her. She is in the process of culling or eliminating your species. The negative effect and energy force your planet is producing is effecting the Whole Verse. It will not be allowed to continue!',
    icon: ClockIcon,
  },
  {
    name: 'Internet Programming',
    description:
      'PubliusLogic is a Static site using JAMstack architecture. Built using Gatsby, React and Typescript for ultimate performance. Served on Netlify via Cloudflare CDN, on Global Server nodes with a continuous deployment (CD,) workflow. Pull requests are automatically built into preview apps, while commits to the master branch trigger the production build and deploy onto Netlify CDN edge node infrastructure.',
    icon: PresentationChartBarIcon,
  },
]

export default function Features() {
  const featuresContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })
  const variants = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.4,
      },
    },
  }
  return (
    <LazyMotion features={loadFeatures}>
      <div variants={featuresContainer}>
        <m.section
          ref={ref}
          variants={variants}
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeIn' }}
        >
          <div className="pb-8 pt-8 text-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base font-semibold uppercase tracking-wide">PubliusLogic</h2>
                <div className="mt-2 text-3xl font-extrabold leading-8 tracking-tight sm:text-2xl">
                  Topics and Discussions
                </div>
                <div className="mt-2 max-w-2xl text-xl lg:mx-auto">
                  PubliusLogic has Topics on God / Creation, Law, USA and World Governments, Life Matters.
                </div>
                <div className="mt-2 max-w-2xl text-xl lg:mx-auto">
                  Focusing on the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only
                  live in the Flesh.
                </div>
                <div className="mt-2 max-w-2xl text-xl lg:mx-auto">Your Soul and Spirit your deny!</div>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-wine-300 text-slate-300 hover:bg-wine-300">
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-16 text-lg font-medium leading-6">{feature.name}</div>
                      </dt>
                      <dd className="ml-16 mt-2 text-base">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </m.section>
      </div>
    </LazyMotion>
  )
}
