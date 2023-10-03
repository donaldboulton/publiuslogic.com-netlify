import * as React from 'react'
import { Fragment } from 'react'
import { Link } from 'gatsby'
import GetPosts from '@/utils/getposts'
import { SuspenseHelper } from '@/components/SuspenseHelper'
import Section from '@/components/Section'

const Tags = React.lazy(() => import('@/components/SiteTags'))
const WavyHr = React.lazy(() => import('@/components/WavyHr'))

export default function LatestArticles() {
  const posts = GetPosts()
  const post = posts[0]
  const otherPosts = posts.slice(1, 6)
  return (
    <>
      <Section>
        <div className="mx-auto max-w-7xl py-4 m-4 bg-slate-900 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-none lg:py-10">
            <div className="flex flex-row items-center">
              <h2 className="text-2xl font-extrabold text-slate-300 md:text-2xl">Latest Articles</h2>
              <Link
                id="blog"
                to="/blog"
                className="ml-4 mt-2 inline-block rounded-md bg-wine-300 px-2 py-2 text-base font-bold text-slate-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-wine-300 hover:text-slate-200 md:px-6 md:py-3 md:text-lg"
              >
                Articles
              </Link>
              <Link
                id="tags"
                to="/tags"
                className="ml-4 mt-2 inline-block rounded-md bg-wine-300 px-2 py-2 text-base font-bold text-slate-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-wine-300 md:px-6 md:py-3 md:text-lg"
              >
                Tags
              </Link>
            </div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 xl:grid-cols-3">
              <div className="relative mb-4  block rounded-lg p-4 text-slate-200 lg:mb-0 lg:p-0 xl:col-span-2">
                <div className="mb-6">
                  <Link to={`/${post.slug}`}>
                    <span className="sr-only">{post.frontmatter.title}</span>
                  </Link>
                  <div className="mt-4">
                    <SuspenseHelper fallback={<div>Loading...</div>}>
                      <Tags tags={post.frontmatter.tags} />
                    </SuspenseHelper>
                  </div>
                  <Link to={`/${post.slug}`}>
                    <h2 className="mb-2 mt-2 text-2xl font-bold leading-tight underline decoration-wine-200 decoration-wavy underline-offset-8 md:text-2xl">
                      {post.frontmatter.title}
                    </h2>
                  </Link>
                  <div>{post.frontmatter.description}</div>
                  <Link
                    to={`/${post.slug}`}
                    className="mt-2 inline-block rounded-md bg-wine-300 px-6 py-3 text-gray-300 shadow-lg shadow-wine-300/50 hover:bg-wine-300 hover:shadow-wine-300/50"
                  >
                    Read more
                    <span className="sr-only">{post.frontmatter.title}</span>
                  </Link>
                </div>
                <SuspenseHelper fallback={<div>Loading...</div>}>
                  <WavyHr className="mb-4" />
                </SuspenseHelper>
                <h2 className="mb-4 mt-4">Featured Articles by Topics</h2>
                <div className="mb-4 mt-10 space-y-12 rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-950 dark:text-slate-300 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 xl:grid-cols-3">
                  <div>
                    <div className="mb-6 ml-12 mt-4 text-lg underline decoration-wine-200 decoration-wavy underline-offset-8 transition duration-300">
                      God and Creation
                    </div>
                    <div>
                      <div>
                        <Link
                          id="creation"
                          to="/blog/creation-of-all"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 italic hover:text-wine-200"
                        >
                          Creation Of All
                        </Link>
                        <div>
                          Last Testament to the Holy Bible. Intro Enclosed is the creation of all, how To Pray to The
                          Holy Trinity
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link
                          id="virtue"
                          to="/blog/virtue"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 hover:text-wine-200"
                        >
                          Virtue
                        </Link>
                        <div>
                          For My Children Since 2000 Here I am going to reflect on what The Christian Bible, Sufism as
                          Tasawwuf
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link
                          id="man"
                          to="/blog/trinity-of-man"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 hover:text-wine-200"
                        >
                          Trinity of Man
                        </Link>
                        <div>
                          Prelude As in all my writings are written for my Children born since 2000. Only there purity
                          can cleanse the
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-6 ml-12 mt-4 text-lg underline decoration-wine-200 decoration-wavy underline-offset-8 transition duration-300">
                      Law and Logic
                    </div>
                    <div>
                      <div>
                        <Link
                          id="cyber"
                          to="/blog/cyber-attack"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 hover:text-wine-200"
                        >
                          Cyber Attack
                        </Link>
                        <div>
                          Warning Attack! Shelter Your Minds! Kind of like last years playtime post, it's not very
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link
                          id="election"
                          to="/blog/usa-election"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 hover:text-wine-200"
                        >
                          USA Election
                        </Link>
                        <div>
                          USA Election Our 2020 election was the most major Racketeering scheme ever, using foreigners
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link
                          id="philosophy"
                          to="/blog/philosophy"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 hover:text-wine-200"
                        >
                          Philosophy
                        </Link>
                        <div>
                          To Sophistry My writing of God in the past got interpreted as philosophy. I will make it real
                          clear what
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-6 ml-12 mt-4 text-lg underline decoration-wine-200 decoration-wavy underline-offset-8 transition duration-300">
                      Programming
                    </div>
                    <div>
                      <div>
                        <Link
                          id="applause"
                          to="/blog/applause-use-sound-confetti"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 hover:text-wine-200"
                        >
                          Applause useSound
                        </Link>
                        <div>
                          Applause Button Click the flowers 🎉 for claps in the Bio Section above and see an hear the
                          Magic. 🤟
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link
                          id="cookies"
                          to="/blog/cookies"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 hover:text-wine-200"
                        >
                          Cookies GDPR
                        </Link>
                        <div>
                          GDPR cookie consent with Gatsby using modules gatsby-plugin-gdpr-cookies and cookie-consent
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link
                          id="forms"
                          to="/blog/react-netlify-forms"
                          className="text-xl font-semibold text-slate-300 underline mb-2 mt-4 hover:text-wine-200"
                        >
                          Netlify Forms
                        </Link>
                        <div>
                          React Netlify Forms, is easy with Bot fields and invisible reCaptcha including dropZone for
                          image upload
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                {otherPosts.map(post => (
                  <Fragment key={post.slug}>
                    <Link to={`/${post.slug}`}>
                      <div className="mb-10 w-full rounded-lg bg-slate-950 p-2 text-slate-300 md:grid md:grid-cols-2">
                        <div className="rounded px-4 text-slate-300 md:col-span-2">
                          <Tags tags={post.frontmatter.tags} />
                          <div className="mb-2 text-xl font-semibold text-slate-300 underline decoration-wine-200 decoration-wavy underline-offset-8 hover:text-wine-200 md:mt-0">
                            {post.frontmatter.title}
                          </div>
                          <span className="block p-2 pl-0 pt-1 text-sm">{post.frontmatter.description}</span>
                        </div>
                      </div>
                    </Link>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
