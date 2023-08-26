import * as React from 'react'
import { useRef } from 'react'
import ReactPlayer from 'react-player/youtube'
import type { HeadProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import LeftText from '@/components/LeftText'
import PageHero from '@/components/PageHero'
import Image from '../../static/svg/undraw/undraw_super_thank_you_re_f8bo.svg'
import OGImage from '../../static/images/undraw/undraw_Super_thank_you_re_f8bo.png'
import HeaderPopover from '@/components/HeaderPopover'
import IframeWrapper from '@/components/IframeWrapper'
import IframeWrapperLarge from '@/components/IframeWrapperLarge'

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

const OldEnough = () => {
  const ref = useRef(null)
  const refPlayer = useRef(null)
  return (
    <>
      <Layout>
        <div className="login-beams bg-scale-100 mb-10 flex flex-1 flex-col">
          <div class="absolute mx-auto w-full px-8 pt-6 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10">
              <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                <div class="flex w-full items-center justify-between md:w-auto">
                  <a href="/">
                    <span className="relative inline-block overflow-hidden">
                      <StaticImage
                        layout="fixed"
                        className="h-8 w-8 self-center rounded-lg"
                        src="../../static/img/apple-touch-icon-32x32.png"
                        width={32}
                        height={32}
                        quality={95}
                        alt="Angelina Jordan"
                        loading="lazy"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div class="hidden items-center space-x-3 md:ml-10 md:flex md:pr-4">
                <a target="_blank" rel="noreferrer" href="https://mansbooks.com/angies-profile">
                  <button
                    type="button"
                    class="font-regular text-scale-1200 bg-scale-100 hover:bg-scale-300 border-scale-600 hover:border-scale-700 dark:border-scale-700 hover:dark:border-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600 relative inline-flex cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="sbui-icon "
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>{' '}
                    <span class="truncate">About Angelina</span>{' '}
                  </button>
                </a>
              </div>
            </nav>
          </div>
          <div className="mb-10 flex flex-1">
            <main className="bg-scale-200 border-scale-500 flex flex-1 flex-shrink-0 flex-col items-center border-r border-slate-700 px-5 pb-8 pt-16 shadow-lg">
              <div className="flex w-[330px] mb-6 flex-1 flex-col justify-center sm:w-[384px]">
                <div className="mb-10">
                  <LeftText className="mb-2 mt-8 text-2xl lg:text-3xl">Angelina's Playlists</LeftText>
                  <h2 className="text-scale-1100 text-sm">Old Enough</h2>
                </div>
                <div className="flex flex-col gap-5">
                  <IframeWrapper>
                    <ReactPlayer
                      ref={ref} 
                      url='https://www.youtube.com/embed/W99gdQlbv3I?si=6U_TIqIiju_nRimW'
                      width="100%"
                      height="100%"
                      controls = {true}
                    />
                  </IframeWrapper>
                </div>
              </div>
              <div className="sm:text-center">
                <p className="text-scale-900 text-xs sm:mx-auto sm:max-w-sm">
                  By continuing, you agree to Mansbooks{' '}
                  <Link className="hover:text-scale-1100 underline" to="/terms">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link className="hover:text-scale-1100 underline" to="privacy">
                    Privacy Policy
                  </Link>
                  , and to receive periodic emails with updates.
                </p>
              </div>
            </main>
            <aside className="form-beams hidden flex-1 flex-shrink basis-1/4 flex-col items-center justify-center xl:flex">
              <div className="relative mt-12 flex flex-col gap-6 opacity-70">
                <IframeWrapperLarge>
                  <ReactPlayer
                    ref={refPlayer}
                    url='https://www.youtube.com/embed/videoseries?si=3WDvhcx37RPUqyZC&amp;list=PLTa09znYPWvKpWlZAAF3v2KEa4b7_tMBf'
                    height="100%"
                    width="100%"
                    controls = {true}
                  />
                </IframeWrapperLarge>              
              </div>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default OldEnough

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps) {
  return (
    <>
      <Seo
        type="page"
        title="Old Enough"
        description="Old Enough Playlists"
        image={ogimage}
        pathname="/old-enough"
      >
        <title>Old Enough</title>
        <meta name="description" content="PubliusLogic Old Enough Page." />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
      </Seo>
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
          description: 'PubliusLogic name means to Publish Logic',
          image: {
            '@type': 'ImageObject',
            url: 'https://publiuslogic.com/static/images/undraw/undraw_Super_thank_you_re_f8bo.png',
            width: '1400',
            height: '450',
          },
          inLanguage: 'en',
          name: 'PubliusLogic',
          publisher: {
            '@id': 'https://publiuslogic.com',
          },
          url: 'https://publiuslogic.com',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Old Enough',
          url: 'https://publiuslogic.com/old-enough',
          image: {
            '@type': 'ImageObject',
            url: 'https://publiuslogic.com/static/images/undraw/undraw_Super_thank_you_re_f8bo.png',
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Mansbooks',
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
                '@id': 'https://publiuslogic.com/old-enough',
                name: 'Old Enough',
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
            email: 'donaldboulton@gmail.com',
            telephone: '+405-863-2165',
          },
          description:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          email: 'donaldboulton@gmail.com',
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
            'mailto:donaldboulton@gmail.com',
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
    </>
  )
}
