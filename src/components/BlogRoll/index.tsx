import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import ReactPaginate from 'react-paginate'
import { LazyMotion, m } from 'framer-motion'
import { CalendarIcon, UserCircleIcon } from '@heroicons/react/outline'
import GetPosts from '@/utils/getposts'
import Tags from '@/components/Tags'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface BlogRollProps {
  tag?: string
  excerpt: string
}
const POSTS_PER_PAGE = 12

const BlogRoll = ({ tag, excerpt }: BlogRollProps) => {
  const posts = GetPosts(tag)
  const [offset, setOffset] = useState(0)

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selected = selectedItem.selected
    const offset = Math.ceil(selected * POSTS_PER_PAGE)
    setOffset(offset)
  }

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  }

  return (
    <LazyMotion features={loadFeatures}>
      <div className="mt-6 flex flex-col items-center mb-10">
        <div className="space-y-12 lg:space-y-0 flex flex-wrap mb-4">
          {posts.slice(offset, offset + POSTS_PER_PAGE).map(post => (
            <section className="p-4 md:w-1/2 lg:w-1/3">
              <m.div className="relative opacity-75" initial="initial" whileHover="hover">
                <div>
                  <m.div
                    className="h-full border-1 border-slate-800 dark:border-slate-300 bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-200 rounded-lg shadow-xl overflow-hidden p-2 opacity-75"
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
                        <h2 className="title-font text-xl font-bold text-slate-900 dark:text-slate-200 dark:hover:text-fuchsia-400 mt-2">
                          {post.frontmatter.title}
                        </h2>
                      </Link>
                      <div className="flex items-center flex-wrap ">
                        <span className="text-black dark:text-white mr-3 inline-flex items-center leading-none text-xs pr-3 py-1 border-r-2 border-fuchsia-200">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {post.frontmatter.date}
                        </span>
                        <span className="text-black dark:text-white inline-flex items-center leading-none text-xs">
                          <UserCircleIcon className="w-4 h-4 mr-1" />
                          {post.frontmatter.author}
                        </span>
                      </div>
                      <p className="mt-3 italic text-sm text-black dark:text-white">{post.excerpt}</p>
                    </div>
                  </m.div>
                </div>
              </m.div>
            </section>
          ))}
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
      </div>
    </LazyMotion>
  )
}
export default BlogRoll
