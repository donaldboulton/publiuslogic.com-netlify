import * as React from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { CalendarIcon, UserCircleIcon } from '@heroicons/react/outline'
import GetPosts from '@/utils/getposts'
import ReactPaginate from 'react-paginate'
import Tags from '@/components/Tags'

import {
  jupiter,
  cutout,
  pianoMan,
  pieFactory,
  graphPaper,
  charlieBrown,
  autumn,
  temple,
  deathStar,
  churchOnSunday,
  overlappingHexagons,
  bamboo,
  bathroomFloor,
  corkScrew,
  happyIntersection,
  kiwi,
  lips,
  lisbon,
  steelBeams,
  tinyCheckers,
  fancyRectangles,
  heavyRain,
  cage,
  connections,
  flippedDiamonds,
  houndstooth,
  morphingDiamonds,
  zigZag,
  aztec,
  bankNote,
  boxes,
  diagonalLines,
  endlessClouds,
  eyes,
  groovy,
  melt,
  parkayFloor,
  pixelDots,
  signal,
  wallpaper,
} from 'hero-patterns'

import OGImage from '../../../static/img/blank.png'

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

const POSTS_PER_PAGE = 12

interface TestimonialProps {
  tag?: string
  title: string
  description: string
  author: string
  tags: string[]
  excerpt: string
}

const Testimonial = ({ tag, expanded }: TestimonialProps) => {
  const posts = GetPosts(tag)
  const [offset, setOffset] = useState(0)

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selected = selectedItem.selected
    const offset = Math.ceil(selected * POSTS_PER_PAGE)
    setOffset(offset)
  }
  const [focusable, setFocusable] = useState(true)
  const ref = useRef()

  useEffect(() => {
    if (ref.current.offsetTop !== 0) {
      setFocusable(false)
    }
  }, [])

  return (
    <>
      <div>
        <Link to={`/${post.slug}`}>
          <p className="sr-only">{post.frontmatter.title}</p>
        </Link>
        {posts.slice(offset, offset + POSTS_PER_PAGE).map((post, i) => (
          <li ref={ref} className="text-sm leading-6">
            <Link to={`/${post.slug}`}>
              <figure className="dark:highlight-white/5 relative flex flex-col-reverse rounded-lg bg-slate-50 p-6 dark:bg-slate-800">
                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                  <p>{post.excerpt}</p>
                </blockquote>
                <figcaption className="flex items-center space-x-4">
                  <span
                    className="h-14 w-14 flex-none rounded-full object-cover"
                    style={{
                      backgroundColor: '#dfdbe5',
                      backgroundImage: patterns[i % patterns.length],
                    }}
                  >
                    <img
                      src={ogimage}
                      alt=""
                      className="h-14 w-14 flex-none rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <div className="flex-auto">
                    <div className="text-base font-semibold text-slate-900 dark:text-slate-300">
                      <Link to={`/${post.slug}`} tabIndex={focusable || expanded ? 0 : -1}>
                        <span className="absolute inset-0" />
                        {post.frontmatter.title}
                      </Link>
                    </div>
                    <div className="mt-0.5">
                      <Link to={`/${post.slug}`}>
                        <h2 className="title-font mt-2 text-xl font-bold text-slate-900 dark:text-slate-200 dark:hover:text-fuchsia-400">
                          {post.frontmatter.author}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </figcaption>
                {post.frontmatter.tags ? <Tags tags={post.frontmatter.tags} /> : ''}
              </figure>
            </Link>
          </li>
        ))}
      </div>
    </>
  )
}

interface TestimonialsProps {
  tag?: string
  title: string
  description: string
  author: string
  tags: string[]
  excerpt: string
}

const Testimonials = ({ tag, post }: TestimonialsProps) => {
  const posts = GetPosts(tag)
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
    <section ref={ref} tabIndex="-1" className="relative mx-auto max-w-7xl px-4 focus:outline-none sm:px-3 md:px-5">
      <h2 className="sr-only">Blog Posts</h2>
      <div
        ref={inViewRef}
        className={clsx(
          'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8',
          !expanded && 'max-h-[35rem] overflow-hidden'
        )}
      >
        <ul className={clsx('mb-40 space-y-8')}>
          <Testimonial key={post.frontmatter.title} expanded={expanded} />
        </ul>
      </div>
      <div
        className={clsx(
          'pointer-events-none inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 dark:from-slate-900',
          expanded ? 'sticky -mt-52' : 'absolute',
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
          {expanded ? 'Okay, I get the point' : 'Show more...'}
        </button>
      </div>
      {posts.length > POSTS_PER_PAGE ? (
        <ReactPaginate
          previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-gray-900 bg-fuchsia-700 text-sm font-medium text-gray-800 dark:text-gray-300 hover:bg-fuchsia-800"
          previousLabel={
            <>
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
          nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-800 text-gray-200 bg-fuchsia-700 hover:bg-fuchsia-800 text-sm font-medium"
          nextLabel={
            <>
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
          pageLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-900 bg-slate-300 dark:bg-slate-800 text-sm font-medium hover:bg-fuchsia-700 text-sm font-medium"
          breakLabel={'...'}
          breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-900 text-sm font-medium"
          pageCount={Math.ceil(posts.length / POSTS_PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="relative z-0 inline-flex shadow-sm -space-x-px border-gray-300 dark:border-gray-900"
          activeLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-900 text-slate-900 dark:text-slate-200 text-sm font-medium hover:bg-fuchsia-700 bg-fuchsia-500"
        />
      ) : (
        ''
      )}
    </section>
  )
}

export default Testimonials
