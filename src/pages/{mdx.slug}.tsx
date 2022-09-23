import * as React from 'react'
import { graphql, Link, HeadProps, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '@/components/Layout'
import Bio from '@/components/Bio'
import ScrollDown from '@/components/ScrollDown'
import Scroll from '@/components/Scroll'
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/outline'
import ScrollIndicator from '@/components/ScrollIndicator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Tags from '@/components/Tags'
import TableOfContent from '@/components/TableOfContent'
import NowPlaying from '@/components/PlayList'
import GiscusComments from '@/components/GiscusComments'
import WavyHr from '@/components/WavyHr'
import Stars from '@/components/Stars'
import SeoBlog from '@/components/Seo/SeoBlog'

const components = { Link }

type DataProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        author: string
        path: string
        date: string
        imageLink: string
        tags: string[]
        publicId: string
        videoTitle: string
      }
      slug: string
      excerpt: string
      parent: {
        modifiedTime: string
      }
      body: string
      pathname: string
      timeToRead: string
    }
  }
}

interface PageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        path: string
        author: string
        date: string
        imageLink: string
        tags: string[]
        publicId: string
        videoTitle: string
      }
      slug: string
      excerpt: string
      parent: {
        modifiedTime: string
      }
      body: string
      pathname: string
      timeToRead: string
    }
  }
}

const BlogPost = ({ data }: PageProps<DataProps>) => {
  const { frontmatter, timeToRead } = data.mdx
  const pathname = '/' + data.mdx.slug
  return (
    <>
      <Header />
      <ScrollIndicator />
      <Stars />
      <Layout>
        <TableOfContent headings={data.mdx.headings} />
        <div className="mb-10 mt-10">
          <section className="px-4 lg:px-0 mt-8 mb-10 max-w-screen-lg mx-auto text-black dark:text-white prose md:prose-lg lg:prose-xl prose-a:text-purple-600 hover:prose-a:text-purple-500">
            <div className="py-4">
              <h1 className="text-lg text-slate-200 mb-2 font-semibold leading-normal">{frontmatter.title}</h1>
              <div className="flex items-center">
                <StaticImage
                  className="head-img mr-2 ring-2 ring-slate-900 ring-inset float-left"
                  layout="fixed"
                  formats={['auto', 'webp']}
                  src="../../static/assets/creation-cut.jpg"
                  width={60}
                  height={60}
                  quality={95}
                  alt="Creation Picture"
                  loading="eager"
                />
                <p className="first-letter:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
                  {frontmatter.description}
                </p>
              </div>
            </div>
            <div className="mb-4 ml-2">
              <Bio />
            </div>
            <div>
              <div className="flex items-center flex-wrap mb-10 lg:place-content-start md:place-content-center sm:place-content-center">
                <div className="text-black dark:text-white mr-2 ml-3 inline-flex items-center leading-none text-base py-1">
                  <TagIcon className="w-6 h-6 mr-1" />
                  <Tags className="py-1 px-2 text-gray-200" tags={frontmatter.tags} />
                </div>
                <div className="text-black dark:text-white mr-2 inline-flex items-center leading-none text-base py-1">
                  <CalendarIcon className="w-6 h-6 mr-1" />
                  {frontmatter.date}
                </div>
                <div className="text-black dark:text-white mr-3 inline-flex items-center leading-none text-base">
                  <ClockIcon className="w-6 h-6 mr-1" />
                  {timeToRead} min read
                </div>
                <div className="text-black dark:text-white mr-3 inline-flex items-center leading-none text-base">
                  <NowPlaying />
                </div>
              </div>
            </div>
            <MDXRenderer components={components}>{data.mdx.body}</MDXRenderer>
            <GiscusComments mapping={pathname} />
            <WavyHr />
          </section>
          <ScrollDown
            className="scroll z-20 right-4 md:right-3 top-20"
            size={40}
            css="position: fixed; color: gray; width: 40px; height: 40px;"
          />
          <Scroll
            className="scroll z-20 right-4 md:right-3 bottom-4"
            showBelow={1500}
            size={40}
            css="position: fixed; color: gray; width: 40px; height: 40px;"
          />
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export default BlogPost

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps<DataProps>) {
  const siteUrl = 'https://publiuslogic.com'
  const pathname = '/' + props.data.mdx.slug
  const excerpt = props.data.mdx.excerpt
  const seo = {
    path: `${siteUrl}${pathname || ''}`,
  }
  const Image = props.data.mdx.frontmatter.imageLink
  return (
    <>
      <SeoBlog
        type="page"
        title={props.data.mdx.frontmatter.title}
        description={props.data.mdx.frontmatter.description}
        image={Image}
        pathname={seo.path}
      >
        <title>{props.data.mdx.frontmatter.title}</title>
        <meta name="description" content={props.data.mdx.frontmatter.description} />
        <meta name="image" content={Image} />
        <meta name="twitter:site" content="@donaldboulton" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.data.mdx.frontmatter.title} />
        <meta name="twitter:url" content={seo.path} />
        <meta name="twitter:description" content={props.data.mdx.frontmatter.description} />
        <meta name="twitter:image" content={Image} />
        <meta name="twitter:creator" content="@donboulton" />
        <meta name="og:title" content={props.data.mdx.frontmatter.title} />
        <meta name="og:url" content={seo.path} />
        <meta name="og:description" content={props.data.mdx.frontmatter.description} />
        <meta name="og:site_name" content="PubliusLogic" />
        <meta name="og:image" content={Image} />
        <meta name="og:image:title" content={props.data.mdx.frontmatter.title} />
        <meta name="og:image:alt" content={props.data.mdx.frontmatter.title} />
        <meta name="og:image:width" content="1400px" />
        <meta name="og:image:height" content="450px" />
        <meta name="og:updated_time" content={props.data.mdx.parent.modifiedTime} />
        <meta name="canonical" content={seo.path} />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
      </SeoBlog>
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
          copyrightYear: 2022,
          creator: {
            '@id': 'https://publiuslogic.com',
          },
          description: 'PubliusLogic name means to Publish Logic',
          image: {
            '@type': 'ImageObject',
            url: Image,
            width: '1400px',
            height: '450px',
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
          name: props.data.mdx.frontmatter.title,
          url: seo.path,
          image: {
            '@type': 'ImageObject',
            url: Image,
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Mansbooks.com',
          },
          license: 'http://publiuslogic.com/blog/0bsd-licence',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: props.data.mdx.frontmatter.title,
          alternativeHeadline: props.data.mdx.frontmatter.description,
          mainEntityOfPage: seo.path,
          image: Image,
          award: 'Best Blog page ever built',
          editor: props.data.mdx.frontmatter.author,
          genre: 'group',
          keywords: props.data.mdx.frontmatter.tags,
          wordCount: '1120',
          publisher: 'PubliusLogic',
          url: seo.path,
          datePublished: props.data.mdx.frontmatter.date,
          dateCreated: props.data.mdx.frontmatter.date,
          dateModified: props.data.mdx.parent.modifiedTime,
          description: props.data.mdx.frontmatter.description,
          articleBody: excerpt,
          author: {
            '@type': 'Person',
            name: props.data.mdx.frontmatter.author,
          },
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
                '@id': 'https://publiuslogic.com/',
                name: 'PubliusLogic Blog',
              },
              position: '1',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://publiuslogic.com/blog',
                name: 'PubliusLogic Blog',
              },
              position: '2',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': seo.path,
                name: props.data.mdx.frontmatter.title,
              },
              position: '3',
            },
          ],
          numberOfItems: '3',
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
            url: 'https://publiuslogic.com/static/images/jpg/dbbg.jpg',
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

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        author
        path
        publicId
        imageLink
        date(formatString: "YYYY-MM-DD")
        tags
      }
      headings {
        value
        depth
      }
      slug
      excerpt(pruneLength: 5000)
      timeToRead
      parent {
        ... on File {
          modifiedTime
        }
      }
      body
    }
  }
`
