import * as React from 'react'
import { LazyMotion, m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'gatsby'
import Tags from '@/components/Tags'
import List from '@/components/List'
import GetPosts from '@/utils/getposts'
import WavyHr from '@/components/WavyHr'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

export default function LatestArticles() {
  const posts = GetPosts()
  const post = posts[0]
  const otherPosts = posts.slice(1, 6)
  const latestArticlesContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const [ref5, isVisible5] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })
  const variants5 = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.8,
      },
    },
  }
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.section variants={latestArticlesContainer}>
          <m.div
            ref={ref5}
            variants={variants5}
            animate={isVisible5 ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeIn' }}
          >
            <div className="bg-primary-dark mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-none lg:py-10">
                <div className="flex flex-row items-center">
                  <h2 className="text-2xl font-extrabold text-slate-300 md:text-2xl">Latest Articles</h2>
                  <Link
                    to="/blog"
                    className="mt-2 ml-4 inline-block rounded-md bg-fuchsia-300 px-2 py-2 text-base font-bold text-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 hover:text-gray-200 md:px-6 md:py-3 md:text-lg"
                  >
                    Articles
                  </Link>
                  <Link
                    to="/tags"
                    className="mt-2 ml-4 inline-block rounded-md bg-fuchsia-500 px-2 py-2 text-base font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 md:px-6 md:py-3 md:text-lg"
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
                        <Tags tags={post.frontmatter.tags} />
                      </div>
                      <Link to={`/${post.slug}`}>
                        <h2 className="mt-2 mb-2 text-2xl font-extrabold font-bold leading-tight underline decoration-fuchsia-600 decoration-wavy underline-offset-8 md:text-2xl">
                          {post.frontmatter.title}
                        </h2>
                      </Link>
                      <div>{post.frontmatter.description}</div>
                      <Link
                        to={`/${post.slug}`}
                        className="mt-2 inline-block rounded-md bg-fuchsia-600 px-6 py-3 text-gray-300 shadow-lg shadow-fuchsia-600/50 hover:bg-fuchsia-700 hover:shadow-fuchsia-700/50"
                      >
                        Read more
                        <span className="sr-only">{post.frontmatter.title}</span>
                      </Link>
                    </div>
                    <WavyHr className="mb-4" />
                    <h2 className="mb-4 mt-4">Featured Articles by Topics</h2>
                    <div className="mt-10 mb-4 space-y-12 rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-800 dark:text-slate-200 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 xl:grid-cols-3">
                      <List>
                        <div className="ml-12 mb-6 mt-4 text-lg underline decoration-fuchsia-600 decoration-wavy underline-offset-8 transition duration-300">
                          God and Creation
                        </div>
                        <List.Item>
                          <div>
                            <Link to="/blog/creation-of-all">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">Creation Of All</span>
                              </h4>
                            </Link>
                            <span>
                              Last Testament to the Holy Bible. Intro Enclosed is the creation of all, how To Pray to
                              The Holy Trinity
                            </span>
                          </div>
                        </List.Item>
                        <List.Item>
                          <div>
                            <Link to="/blog/virtue">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">Virtue</span>
                              </h4>
                            </Link>
                            <span>
                              For My Children Since 2000 Here I am going to reflect on what The Christian Bible, Sufism
                              as Tasawwuf
                            </span>
                          </div>
                        </List.Item>
                        <List.Item>
                          <div>
                            <Link to="/blog/trinity-of-man">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">Trinity of Man</span>
                              </h4>
                            </Link>
                            <span>
                              Prelude As in all my writings are written for my Children born since 2000. Only there
                              purity can cleanse the
                            </span>
                          </div>
                        </List.Item>
                      </List>
                      <List>
                        <div className="ml-12 mb-6 mt-4 text-lg underline decoration-fuchsia-600 decoration-wavy underline-offset-8 transition duration-300">
                          Law and Logic
                        </div>
                        <List.Item>
                          <div>
                            <Link to="/blog/cyber-attack">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">Cyber Attack</span>
                              </h4>
                            </Link>
                            <span>
                              Warning Attack! Shelter Your Minds! Kind of like last years playtime post, it's not very
                            </span>
                          </div>
                        </List.Item>
                        <List.Item>
                          <div>
                            <Link to="/blog/usa-election">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">USA Election</span>
                              </h4>
                            </Link>
                            <span>
                              USA Election Our 2020 election was the most major Racketeering scheme ever, using
                              foreigners
                            </span>
                          </div>
                        </List.Item>
                        <List.Item>
                          <div>
                            <Link to="/blog/philosophy">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">Philosophy</span>
                              </h4>
                            </Link>
                            <span>
                              To Sophistry My writing of God in the past got interpreted as philosophy. I will make it
                              real clear what
                            </span>
                          </div>
                        </List.Item>
                      </List>
                      <List>
                        <div className="ml-12 mb-6 mt-4 text-lg underline decoration-fuchsia-600 decoration-wavy underline-offset-8 transition duration-300">
                          Programming
                        </div>
                        <List.Item>
                          <div>
                            <Link to="/blog/applause-use-sound-confetti">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">Applause useSound</span>
                              </h4>
                            </Link>
                            <span>
                              Applause Button Click the flowers 🎉 for claps in the Bio Section above and see an hear
                              the Magic. 🤟
                            </span>
                          </div>
                        </List.Item>
                        <List.Item>
                          <div>
                            <Link to="/blog/cookies">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">Cookies GDPR</span>
                              </h4>
                            </Link>
                            <span>
                              GDPR cookie consent with Gatsby using modules gatsby-plugin-gdpr-cookies and
                              cookie-consent
                            </span>
                          </div>
                        </List.Item>
                        <List.Item>
                          <div>
                            <Link to="/blog/react-netlify-forms">
                              <h4>
                                <span className="text-fuchsia-500 hover:text-fuchsia-600">Netlify Forms</span>
                              </h4>
                            </Link>
                            <span>
                              React Netlify Forms, is easy with Bot fields and invisible reCaptcha including dropZone
                              for image upload
                            </span>
                          </div>
                        </List.Item>
                      </List>
                    </div>
                  </div>
                  <div className="w-full">
                    {otherPosts.map(post => (
                      <Link to={`/${post.slug}`}>
                        <div className="mb-10 w-full rounded-lg bg-gray-800 p-2 text-white md:grid md:grid-cols-2">
                          <div className="rounded px-4 text-gray-200 md:col-span-2">
                            <Tags tags={post.frontmatter.tags} />
                            <div className="mb-2 text-xl font-semibold text-white underline decoration-fuchsia-600 decoration-wavy underline-offset-8 hover:text-fuchsia-600 md:mt-0">
                              {post.frontmatter.title}
                            </div>
                            <p className="block p-2 pl-0 pt-1 text-sm">{post.frontmatter.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </m.section>
      </LazyMotion>
    </>
  )
}
