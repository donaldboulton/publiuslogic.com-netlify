import * as React from 'react'
import type { HeadProps } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'
import { Link } from 'gatsby'
import Stars from '@/components/Stars'
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

import GetTags from '@/utils/gettags'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollIndicator from '@/components/ScrollIndicator'
import Image from '../../static/svg/undraw/undraw_Windows_re_uo4w.svg'
import OGImage from '../../static/images/undraw/undraw_Windows_re_uo4w.png'

const patterns = [
  steelBeams('#9c92ac', 0.5),
  jupiter('#9c92ac', 0.5),
  cutout('#9c92ac', 0.5),
  pianoMan('#9c92ac', 0.5),
  pieFactory('#9c92ac', 0.5),
  graphPaper('#9c92ac', 0.5),
  charlieBrown('#9c92ac', 0.5),
  autumn('#9c92ac', 0.5),
  temple('#9c92ac', 0.5),
  deathStar('#9c92ac', 0.5),
  churchOnSunday('#9c92ac', 0.5),
  overlappingHexagons('#9c92ac', 0.5),
  bamboo('#9c92ac', 0.5),
  bathroomFloor('#9c92ac', 0.5),
  corkScrew('#9c92ac', 0.5),
  happyIntersection('#9c92ac', 0.5),
  kiwi('#9c92ac', 0.5),
  lips('#9c92ac', 0.5),
  lisbon('#9c92ac', 0.5),
  tinyCheckers('#9c92ac', 0.5),
  fancyRectangles('#9c92ac', 0.5),
  heavyRain('#9c92ac', 0.5),
  cage('#9c92ac', 0.5),
  connections('#9c92ac', 0.5),
  flippedDiamonds('#9c92ac', 0.5),
  houndstooth('#9c92ac', 0.5),
  morphingDiamonds('#9c92ac', 0.5),
  zigZag('#9c92ac', 0.5),
  aztec('#9c92ac', 0.5),
  bankNote('#9c92ac', 0.5),
  boxes('#9c92ac', 0.5),
  diagonalLines('#9c92ac', 0.5),
  endlessClouds('#9c92ac', 0.5),
  eyes('#9c92ac', 0.5),
  groovy('#9c92ac', 0.5),
  melt('#9c92ac', 0.5),
  parkayFloor('#9c92ac', 0.5),
  pixelDots('#9c92ac', 0.5),
  signal('#9c92ac', 0.5),
  wallpaper('#9c92ac', 0.5),
]

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

const Tags = () => {
  const tags = GetTags()

  return (
    <>
      <Header />
      <ScrollIndicator />
      <Stars />
      <Layout>
        <PageHero title="Blog Tags" description="Click on each tag to view blog posts containing tag." image={Image} />
        <div className="mt-10">
          <div className="mt-6 mb-24 grid grid-cols-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 gap-x-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-y-6 xl:gap-x-6">
            {tags
              .sort((a, b) => b.count - a.count)
              .map((tag, i) => (
                <Link key={tag.tag} to={`/tags/${kebabCase(tag.tag)}/`} className="group">
                  <section
                    className="relative w-full h-24 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                    style={{
                      backgroundColor: '#dfdbe5',
                      backgroundImage: patterns[i % patterns.length],
                    }}
                  >
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                      <h3 className="text-center text-white text-2xl font-bold">
                        <span className="absolute inset-0"></span>
                        {tag.tag}
                      </h3>
                      <p className="text-center text-gray-200 text-sm font-medium">&nbsp;({tag.count})</p>
                    </div>
                  </section>
                </Link>
              ))}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export default Tags

export function Head(props: HeadProps) {
  return (
    <>
      <SEO type="page" title="Search" description="Click on each Post for link." image={ogimage} pathname="/search">
        <title>Tags</title>
        <meta name="description" content="PubliusLogic Tags Page." />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
      </SEO>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Tags',
          alternativeHeadline: 'Site Tags',
          image: ogimage,
          award: 'Best Tags page ever built',
          editor: 'Donald Boulton',
          genre: 'search engine optimization',
          keywords: 'publiuslogic tags site',
          wordCount: '1120',
          publisher: 'PubliusLogic',
          url: 'https://publiuslogic.com/tags',
          datePublished: '2020-09-20',
          dateCreated: '2020-08-20',
          dateModified: '2022-08-16',
          description: 'We love to Tag and do stuff to help people and stuff',
          articleBody: 'You can paste your entire post in here, and yes it can get really really long.',
          author: {
            '@type': 'Person',
            name: 'Donald W. Boulton',
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
          copyrightYear: '2022',
          creator: {
            '@id': 'https://publiuslogic.com',
          },
          description: 'PubliusLogic name means to Publish Logic',
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
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Tags',
          url: 'https://publiuslogic.com/search',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
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
                '@id': 'https://publiuslogic.com/tags',
                name: 'Site Tags',
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
