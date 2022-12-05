import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { LazyMotion, m, useInView } from 'framer-motion'
import { CalendarIcon, UserCircleIcon } from '@heroicons/react/outline'
import GetPosts from '@/utils/getposts'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import clsx from 'clsx'
import Tags from '@/components/Tags'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface BlogRollProps {
  tag?: string
  title: string
  description: string
  path: string
  author: string
  date: string
  imageLink: string
  tags: string[]
  excerpt: string
}

const BlogRoll = ({ tag }: BlogRollProps) => {
  const posts = GetPosts(tag)

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  }
  const ref = useRef()
  const [expanded, setExpanded] = useState(false)
  const [showCollapseButton, setShowCollapseButton] = useState(false)
  const [transition, setTransition] = useState(false)
  const { ref: inViewRef, inView } = useInView({ threshold: 0 })
  const initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    if (expanded) {
      ref.current.focus({ preventScroll: expanded })
    } else {
      ref.current.focus()
      ref.current.scrollIntoView()
    }
    if (expanded) {
      setShowCollapseButton(false)
    }
  }, [expanded])

  useEffect(() => {
    setTimeout(() => setTransition(expanded), 0)
  }, [expanded])

  useEffect(() => {
    if (!expanded || !inView) return
    function onScroll() {
      const bodyRect = document.body.getBoundingClientRect()
      const rect = ref.current.getBoundingClientRect()
      const middle = rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2
      const isHalfWay = window.scrollY > middle
      if (showCollapseButton && !isHalfWay) {
        setShowCollapseButton(false)
      } else if (!showCollapseButton && isHalfWay) {
        setShowCollapseButton(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [expanded, showCollapseButton, inView])

  return (
    <LazyMotion features={loadFeatures}>
      <section
        ref={ref}
        tabIndex="-1"
        className="relative mx-auto max-w-7xl px-4 pb-4 focus:outline-none sm:px-3 md:px-5"
      >
        <ul
          ref={inViewRef}
          className={clsx(
            'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8',
            !expanded && 'max-h-[35rem] overflow-hidden'
          )}
        >
          {posts.map(post => (
            <li ref={ref} className={clsx('space-y-8 leading-6')}>
              <m.div className="relative flex flex-col-reverse opacity-75" initial="initial" whileHover="hover">
                <m.div
                  className="border-1 h-full overflow-hidden rounded-lg border-slate-800 bg-slate-200 p-2 text-slate-900 opacity-75 shadow-xl dark:border-slate-300 dark:bg-slate-900 dark:text-slate-200"
                  variants={cardVariants}
                  transition={{
                    ease: 'easeOut',
                    delay: 0.15,
                    duration: 0.5,
                  }}
                >
                  <Link to={`/${post.slug}`}>
                    <p className="sr-only">{post.frontmatter.title}</p>
                  </Link>
                  <div className="p-6">
                    {post.frontmatter.tags ? <Tags tags={post.frontmatter.tags} /> : ''}
                    <Link to={`/${post.slug}`}>
                      <h2 className="title-font mt-2 text-xl font-bold text-slate-900 dark:text-slate-200 dark:hover:text-fuchsia-400">
                        {post.frontmatter.title}
                      </h2>
                    </Link>
                    <div className="flex flex-wrap items-center ">
                      <span className="mr-3 inline-flex items-center border-r-2 border-fuchsia-200 py-1 pr-3 text-xs leading-none text-black dark:text-white">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        {post.frontmatter.date}
                      </span>
                      <span className="inline-flex items-center text-xs leading-none text-black dark:text-white">
                        <UserCircleIcon className="mr-1 h-4 w-4" />
                        {post.frontmatter.author}
                      </span>
                    </div>
                    <p className="mt-3 text-sm italic text-black dark:text-white">{post.excerpt}</p>
                  </div>
                </m.div>
              </m.div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-64">
        <div
          className={clsx(
            '-pt-8 pointer-events-none inset-x-0 bottom-0 -mb-[32rem] flex justify-center bg-gradient-to-t from-white pb-8 dark:from-slate-900',
            expanded ? 'sticky -mb-48' : 'absolute',
            transition && 'transition-opacity duration-300',
            expanded && (showCollapseButton ? 'opacity-100' : 'opacity-0')
          )}
        >
          <button
            type="button"
            className={clsx(
              'relative flex h-12 items-center rounded-lg bg-slate-900 px-6 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-700 dark:hover:bg-slate-600',
              transition && 'transition-transform',
              expanded && !showCollapseButton && 'translate-y-4',
              (!expanded || showCollapseButton) && 'pointer-events-auto'
            )}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less...' : 'Show more...'}
          </button>
        </div>
      </section>
    </LazyMotion>
  )
}

export default BlogRoll
