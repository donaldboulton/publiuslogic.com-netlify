import * as React from 'react'
import { useState } from 'react'
import type { HeadProps } from 'gatsby'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '@/components/Seo'
import Features from '@/components/Features'
import LatestArticles from '@/components/LatestArticles'
import { LazyMotion, motion } from 'framer-motion'
import AnimatedCharacters from '@/components/AnimatedCharacters'
import Layout from '@/components/Layout'
import OGImage from '../../static/images/jpg/dbbg.jpg'
import Fruition from '@/components/Fruition'
import Updates from '@/components/Updates'
import ThreeDotsWave from '@/components/ThreeDotsWave'
import loadable from '@loadable/component'

const Table = loadable(() => import('@/components/Table'), {
  fallback: (
    <div>
      <ThreeDotsWave />
    </div>
  ),
})

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 531,
}

const Home = () => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [replay, setReplay] = useState(true)
  const placeholderText = [
    { type: 'heading1', text: 'PubliusLogic' },
    {
      type: 'heading2',
      text: 'I Publish Logic & Gods Truth!',
    },
  ]

  const headingContainer = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <>
      <Layout>
        <main className="font-sans">
          <div className="relative flex content-center items-center justify-center">
            <div className="bg-slate-950 relative mx-auto mb-4 h-96 w-full text-slate-300 md:mb-0">
              <StaticImage
                className="absolute left-0 top-0 z-0 h-full w-full"
                formats={['auto', 'webp']}
                src="../../static/images/jpg/dbbg.jpg"
                quality={95}
                alt="Home Picture"
                area-label="Home Picture"
                loading="eager"
              />
              <LazyMotion features={loadFeatures}>
                <motion.div
                  className="absolute left-3 top-16 z-30 p-4"
                  initial="hidden"
                  animate={replay ? 'visible' : 'hidden'}
                  variants={headingContainer}
                >
                  <div className="container">
                    {placeholderText.map((item, index) => {
                      return <AnimatedCharacters {...item} key={index} />
                    })}
                  </div>
                </motion.div>
              </LazyMotion>
            </div>
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 top-auto mt-4 w-full overflow-hidden transition-all duration-200"
              style={{ height: '70px' }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon className="fill-current text-slate-700 opacity-90" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
          </div>
          <section className="-mt-10 bg-slate-700 pb-10 text-slate-200 transition-all duration-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="w-full px-4 pt-4 text-center md:w-4/12 lg:pt-10">
                  <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-wine-300 text-slate-200 shadow-lg shadow-wine-300/50 transition-all duration-200">
                    <div className="flex-auto px-4 py-5">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 p-3 text-center shadow-lg shadow-blue-700/50">
                        <StaticImage
                          layout="fixed"
                          width={24}
                          height={24}
                          className="icon"
                          formats={['auto', 'webp']}
                          src="../../static/img/apple-touch-icon-32x32.png"
                          quality={95}
                          alt="prayer"
                          loading="eager"
                        />
                      </div>
                      <h6 className="text-xl font-semibold">
                        <Link to="/blog/commandments" area-label="Commandments" className="text-rose-500">
                          Planetary Laws
                        </Link>
                      </h6>
                      <div className="mb-4 mt-2 text-slate-300">
                        The Laws of man have strayed far from the truth of Creation and Gods Laws. Under Gods Law all
                        Life is precious and should be preserved at all cost. Mans laws care nothing for life; you kill
                        your, "Unborn Children"!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 text-center md:w-4/12">
                  <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-indigo-700 text-slate-200 shadow-lg shadow-indigo-700/50">
                    <div className="flex-auto px-4 py-4">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 p-3 text-center shadow-lg shadow-purple-500/50">
                        <StaticImage
                          layout="fixed"
                          width={24}
                          height={24}
                          className="icon"
                          area-label="Prayer"
                          formats={['auto', 'webp']}
                          src="../../static/img/prayer-150-150.png"
                          quality={95}
                          alt="prayer"
                          loading="eager"
                        />
                      </div>
                      <h6 className="text-xl font-semibold">
                        <Link
                          to="/blog/creation-of-all/#breath-of-life"
                          area-label="Breath Of Life"
                          className="text-rose-500"
                        >
                          Breath Of Life
                        </Link>
                      </h6>
                      <div className="mb-4 mt-2 text-slate-300">
                        Creation Of All, was formed through song that started the dance of life from a blank and
                        formless verse, bringing forth life to all. For all to formalize there, "Own Song"!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 pt-6 text-center md:w-4/12">
                  <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-purple-600 text-slate-200 shadow-lg shadow-purple-600/50">
                    <div className="flex-auto px-4 py-5">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-wine-300 p-3 text-center shadow-lg shadow-wine-300/50">
                        <StaticImage
                          layout="fixed"
                          width={24}
                          height={24}
                          className="icon"
                          area-label="JAMStack"
                          formats={['auto', 'webp']}
                          src="../../static/img/jamstack-150-150.png"
                          quality={95}
                          alt="prayer"
                          loading="eager"
                        />
                      </div>
                      <h6 className="text-xl font-semibold">
                        <a
                          href="https://jamstack.org/"
                          rel="noopener noreferrer"
                          target="_blank"
                          area-label="JAMstack"
                          className="text-rose-500"
                        >
                          <h6>JAMStack Technology</h6>
                        </a>
                      </h6>
                      <div className="mb-4 mt-2 text-slate-200">
                        PubliusLogic is a Static site using JAMstack architecture. Built using Gatsby, React, MDX,
                        Tailwind and Typescript on Netlify Servers for, "Ultimate Performance"!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-10 text-slate-200">
                <div className="flex justify-center">
                  <StaticImage
                    className="m-auto mx-auto mb-3 h-20 w-20 max-w-xs rounded-full ring ring-indigo-500 ring-offset-4"
                    formats={['auto', 'webp']}
                    src="../../static/img/donald-boulton-80.jpg"
                    quality={95}
                    alt="Profile picture"
                    area-label="My Picture"
                    loading="eager"
                  />
                </div>
                <h2 className="m-auto flex max-w-xs justify-center text-2xl font-bold">Donald W. Boulton</h2>
                <a
                  className="m-auto flex max-w-xs justify-center text-rose-500 hover:text-rose-400"
                  href="https://donboulton.com"
                  target="_blank"
                  rel="noreferrer"
                  area-label="Don Boulton Home"
                >
                  https://donboulton.com
                </a>
                <div className="m-auto my-2 mb-6 max-w-xl  justify-center text-slate-200 hover:text-slate-300">
                  <div className="justify-items-center text-center">
                    Left Hand of Father God since the beginning of time!{' '}
                  </div>
                  <div className="justify-items-center text-center">
                    Self Taught Full Stack Developer. Gatsby, MDX, TypeScript Tailwind CSS.
                  </div>
                </div>
                <div className="m-auto flex max-w-xs justify-center">
                  <div className="grid auto-cols-min grid-flow-col gap-4">
                    <a
                      className="flex items-center text-blue-400 hover:text-blue-500"
                      href="https://twitter.com/donboulton"
                      target="_blank"
                      rel="noreferrer"
                      area-label="Don Boulton Twitter"
                    >
                      <svg
                        className="mr-0.5 mt-0.5 flex-initial"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        fill="currentColor"
                      >
                        <title>Twitter</title>
                        <divath d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      <span>donboulton</span>
                    </a>
                    <a
                      className="flex items-center text-slate-200 hover:text-slate-300"
                      href="https://www.github.com/donaldboulton"
                      target="_blank"
                      rel="noreferrer"
                      area-label="Don Boulton Github"
                    >
                      <svg
                        className="mr-0.5 mt-0.5 flex-initial"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        fill="currentColor"
                      >
                        <title>GitHub</title>
                        <divath d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>donaldboulton</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative bg-slate-900 py-20">
            <div
              className="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full overflow-hidden"
              style={{ height: '80px' }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon className="fill-current text-slate-900" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center bg-slate-900 text-slate-200">
                <div className="mt-8 flex flex-wrap items-center">
                  <div className="mb-6 ml-auto mr-auto w-full px-4 md:w-5/12">
                    <h3 className="mb-2 text-3xl font-semibold leading-normal text-slate-200">
                      Coming Out of Retirement
                    </h3>
                    <div
                      className="first-letter:float-left first-letter:mr-3
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-300
  first-line:uppercase first-line:tracking-widest
"
                    >
                      I have been Retired from birth until I become 65, then I am getting to work, start singing,
                      finding somewhere the people like to talk about God, Life, Love, Truth! Starting my Trinity's
                      church on Earth. I Had to Walk this Earth twice as long as my Son Jesus. "To Know All before
                      Action"!
                    </div>
                    <div className="mb-4 mt-4 text-lg font-light leading-relaxed text-slate-300">
                      <div>
                        <span className="mt-4 text-rose-500 hover:text-rose-700 hover:shadow-rose-700/50">
                          {' '}
                          Mans Books Of Life
                        </span>
                        <div>
                          <span className="text-slate-300">
                            {' '}
                            Will be compared to Gods Books Of Life in one years time.
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://mansbooks.com"
                        className="mt-4 font-bold text-rose-600 hover:text-rose-500 hover:shadow-rose-500/50"
                      >
                        https://mansbooks.com
                      </a>
                    </div>
                    <div className="mb-4 mt-0 text-lg font-light leading-relaxed text-slate-200">
                      <div>
                        <span className="mt-4 text-rose-500 hover:text-rose-700 hover:shadow-rose-700/50">
                          {' '}
                          Basic Instructions Books While On Earth
                        </span>
                        <div>Human Instruction Manuel the Last Testament to the Holy Bible.</div>
                      </div>
                      <a
                        href="https://bibwoe.com"
                        className="mt-4 font-bold text-rose-600 hover:text-rose-500 hover:shadow-rose-500/50"
                      >
                        https://bibwoe.com.
                      </a>
                    </div>
                  </div>
                  <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
                    <Fruition />
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 top-auto mt-4 w-full overflow-hidden bg-slate-900 bg-transparent transition-all duration-200"
                  style={{ height: '70px' }}
                >
                  <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon className="fill-current text-slate-700" points="2560 0 2560 100 0 100"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </section>
          <section className="relative block bg-slate-700 py-20">
            <div className="container mx-auto px-4 pb-24">
              <Features />
            </div>
            <div className="mb:mt-24 pointer-events-none absolute bottom-0 left-1/2 right-0 mt-24 w-full -translate-x-1/2 scale-x-[-1] transform overflow-hidden bg-transparent pt-24 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2560"
                height="200"
                viewBox="0 0 2560 200"
                className="fill-slate-900 stroke-blue-500"
              >
                <path
                  strokeWidth="2"
                  d="M26 106 0 23-7-1v211h2577V23l-32 118-27-8-27-50-27-19-28 33-27 68-26 15-28-55-26 16-27-27-27-43-27 47-27 18-28-60-25 89-29 8-26-40-27-69-29-32-25-8-27 47-28 38-27-12-27-44h-27l-26 18-27 43-27 15-27-24-28-67-26-28-28-7-25 93-26-32-29-4-28 100-26-24-27 37-27-28-27-16-27 53-28-60-26 23-27-23-27-8-27 42-27 26-27-77-28 17-27-13-26 58-28-11-27 11-27-31-27-22-27 42-27-11-27 28-26 15-27-66-28-13-26-71-27 10-28-21-27 109-27-30-27 8-26 84-27-19-28-93-27-59-26-20-27 68-27-59-27 55-27 35h-27l-28-50-26-8-28 97-27-23-26 51-27-114-26 86-28-102-27 53-27-48-27 27-28 61-27-22-27-8-27 39-27-83-27 44Z"
                ></path>
              </svg>
            </div>
          </section>
          <section className="relative block bg-primary-dark pb-20 pt-10">
            <div className="container mx-auto px-4 lg:pb-28 lg:pt-12">
              <LatestArticles />
              <div className="pointer-events-none absolute bottom-0 left-1/2 right-0 mt-10 w-full -translate-x-1/2 scale-x-[-1] transform overflow-hidden bg-transparent transition-all duration-200 md:mt-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  width="2560"
                  height="200"
                  viewBox="0 0 2560 200"
                  className="fill-black-900 stroke-red-600"
                >
                  <path
                    strokeWidth="2"
                    d="M26 106 0 23-7-1v211h2577V23l-32 118-27-8-27-50-27-19-28 33-27 68-26 15-28-55-26 16-27-27-27-43-27 47-27 18-28-60-25 89-29 8-26-40-27-69-29-32-25-8-27 47-28 38-27-12-27-44h-27l-26 18-27 43-27 15-27-24-28-67-26-28-28-7-25 93-26-32-29-4-28 100-26-24-27 37-27-28-27-16-27 53-28-60-26 23-27-23-27-8-27 42-27 26-27-77-28 17-27-13-26 58-28-11-27 11-27-31-27-22-27 42-27-11-27 28-26 15-27-66-28-13-26-71-27 10-28-21-27 109-27-30-27 8-26 84-27-19-28-93-27-59-26-20-27 68-27-59-27 55-27 35h-27l-28-50-26-8-28 97-27-23-26 51-27-114-26 86-28-102-27 53-27-48-27 27-28 61-27-22-27-8-27 39-27-83-27 44Z"
                  ></path>
                </svg>
              </div>
            </div>
          </section>
          <section className="relative block pb-20 pt-24 lg:pt-0">
            <div className="container mx-auto px-4">
              <div className="-mt-40 flex flex-wrap justify-center lg:-mt-48">
                <div className="w-full px-4">
                  <Updates />
                  <div className="light:bg-gray-200 light:text-gray-800 mb-4 mt-10 rounded-lg bg-gray-800 text-slate-300 lg:mt-6">
                    <h4 className="mb-2 text-center text-2xl font-semibold text-slate-300 underline decoration-wine-200 decoration-wavy underline-offset-8">
                      Ordered Spiritual Reading List!
                    </h4>
                    <Table />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Home

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps) {
  return (
    <>
      <Seo
        type="homepage"
        title="Home"
        description="PubliusLogic topics on Law Congress Programing and Human Anything."
        image={ogimage}
        pathname="/"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'PubliusLogic Home Page',
          alternativeHeadline: 'At PubliusLogic we publish logic and Gods truth',
          image: ogimage,
          award: 'Best Home page ever built',
          editor: 'Donald Boulton',
          genre: 'search engine optimization',
          keywords: 'home logic god',
          wordCount: '1120',
          publisher: 'PubliusLogic',
          url: 'https://publiuslogic.com',
          datePublished: '2020-09-20',
          dateCreated: '2020-08-20',
          dateModified: '2022-08-16',
          description: 'We love to do stuff to help people',
          articleBody: 'You can paste your entire post in here, and yes it can get really really long.',
          author: {
            '@type': 'Person',
            name: 'Donald W. Boulton',
            url: 'https://donboulton.com',
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          about: {
            '@id': 'https://publiuslogic.com',
          },
          audience: 'public',
          abstract:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          author: {
            '@id': 'https://donboulton.com',
          },
          copyrightHolder: {
            '@id': 'https://publiuslogic.com',
          },
          copyrightYear: 2023,
          creator: {
            '@id': 'https://publiuslogic.com',
          },
          description:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          inLanguage: 'en',
          name: 'PubliusLogic',
          publisher: {
            '@id': 'https://publiuslogic.com',
          },
          url: 'https://publiuslogic.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://query.publiuslogic.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'PubliusLogic Home Page',
          url: 'https://publiuslogic.com/',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'PubliusLogic',
            name: 'Publius Logic Home',
          },
          license: 'http://publiuslogic.com/blog/0bsd-licence',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          itemListElement: [
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://publiuslogic.com',
                name: 'PubliusLogic',
              },
              position: '1',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://publiuslogic.com/',
                name: 'Home',
              },
              position: '2',
            },
          ],
          numberOfItems: '2',
          name: 'Breadcrumbs',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@id': 'https://publiuslogic.com',
          '@type': 'Organization',
          address: 'OKC, Middle Earth',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'donboulton@donboulton.com',
            telephone: '+405-863-2165',
          },
          description:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          email: 'donboulton@donboulton.com',
          founder: {
            '@id': 'https://donboulton.com',
          },
          location: 'OKC, Middle Earth',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          logo: {
            '@type': 'ImageObject',
            url: 'data:image/png;base64,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',
          },
          name: 'PubliusLogic',
          sameAs: [
            'mailto:donboulton@donboulton.com',
            'tel:+405-863-2165',
            'https://www.facebook.com/donboulton',
            'https://www.instagram.com/boulton3662',
            'https://twitter.com/donboulton',
            'https://www.linkedin.com/donboulton',
            'https://github.com/donaldboulton/',
          ],
          url: 'https://publiuslogic.com',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://donboulton.com',
          name: 'Donald Boulton',
          url: 'https://donboulton.com',
          worksFor: {
            '@id': 'https://publiuslogic.com',
          },
        })}
      </script>
      <title>Home</title>
      <meta name="description" content="PubliusLogic Home Page." />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
    </>
  )
}
