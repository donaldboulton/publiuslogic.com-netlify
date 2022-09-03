import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'
import Center from '@/components/Center'
import List from '@/components/List'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const Accordion = () => {
  const accordionContainer = {
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
  const [ref4, isVisible4] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants4 = {
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
    <LazyMotion features={loadFeatures}>
      <m.section className="font-sans" variants={accordionContainer}>
        <div className="w-full px-4 mr-auto ml-auto">
          <m.div
            ref={ref4}
            variants={variants4}
            animate={isVisible4 ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex w-full pt-2">
              <div className="mx-auto w-full rounded-2xl p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 dark:bg-slate-900 px-4 py-2 text-left text-sm font-medium text-slate-200 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span className="text-lg">Lyrics Suspicious Minds</span>
                        <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-200`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-slate-200">
                        <div className="text-md">
                          Only change in song is verse 1, to, "Heart of a Child", from, "We're are caught in a trap
                        </div>
                        <Center>I Already Know Angie!</Center>
                        <div>
                          Way more Beautiful than Elvis's version of which I saw live along time ago. 1972 or 73?{' '}
                        </div>

                        <div className="my-4">[Bridge]</div>

                        <div>Oh, let our love survive</div>
                        <div>I'll dry the tears from your eyes</div>
                        <div>Let's don't let a good thing die</div>
                        <div>When, honey, you know I've never lied, to you</div>

                        <div className="my-4">[Verse 1]</div>

                        <div>Heart Of A Child, I can't walk out</div>
                        <div>Because I love you too much, baby </div>
                        <div>Why can't you see, what you're doin' to me </div>
                        <div>When you don't believe a word I say?</div>

                        <div className="my-4">[Chorus]</div>

                        <div>We can't go on together With suspicious minds</div>

                        <div>And we can't build our dreams On suspicious minds</div>

                        <div className="my-4">[Verse 2]</div>

                        <div>If an old friend I know,</div>
                        <div>stops by to say hello</div>
                        <div>Would I still see suspicion in your eyes?</div>
                        <div>Here we go again,</div>
                        <div>asking where I've been</div>
                        <div>You can't see the tears are real, I'm cryin</div>

                        <div className="my-4">[Chorus]</div>

                        <div>We can't go on together,</div>
                        <div>With suspicious minds</div>
                        <div>And we can't build our dreams,</div>
                        <div>On suspicious minds</div>

                        <div className="my-4">[Bridge]</div>

                        <div>Oh, let our love survive,</div>
                        <div>I'll dry the tears from your eyes</div>
                        <div>Let's don't let a good thing die When, honey,</div>
                        <div>you know I've never lied to you.</div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 dark:bg-slate-900 px-4 py-2 text-left text-sm font-medium text-slate-200 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span className="text-lg">Credits</span>
                        <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-200`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-slate-200">
                        <List>
                          <List.Item>
                            <span className="mb-1" variant="secondary">
                              Vocals: Angelina Jordan
                            </span>
                          </List.Item>
                          <List.Item>
                            <span className="mb-1" variant="secondary">
                              Produced By: Mery Zamani
                            </span>
                          </List.Item>
                          <List.Item>
                            <span className="mb-1" variant="secondary">
                              Written By: Mark James
                            </span>
                          </List.Item>
                          <List.Item>
                            <span className="mb-1" variant="secondary">
                              Piano: Rob Christie
                            </span>
                          </List.Item>
                          <List.Item>
                            <span className="mb-1" variant="secondary">
                              Release Date: June 22, 2022
                            </span>
                          </List.Item>
                          <List.Item>
                            <span className="mb-1" variant="secondary">
                              Suspicious Minds Is A Cover Of, Suspicious Minds by Elvis Presley
                            </span>
                          </List.Item>
                        </List>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  )
}

export default Accordion
