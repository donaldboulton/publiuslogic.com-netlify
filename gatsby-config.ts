import type { GatsbyConfig } from 'gatsby'
import adapter from 'gatsby-adapter-netlify'
import siteAcronyms from './gatsby-site-acronyms'
import queries from './src/utils/algolia-queries'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config'
import dotenv from 'dotenv'
dotenv.config()

const fullConfig = resolveConfig(tailwindConfig)

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://apis.google.com/ https://netlify-rum.netlify.app/netlify-rum.js https://apis.google.com/js/platform.js cdn.vercel-insights.com https://youtube.com *.youtube.com *.twitter.com *.giscus.app *.apis.google.com *.googleapis.com *.googletagmanager.com *.netlify-rum.netlify.app *.gstatic.com cdn.usefathom.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' https://fonts.googleapis.com *.googleapis.com *.youtube.com 'unsafe-inline' data:;
  frame-src https://www.youtube-nocookie.com/ https://giscus.app/ https://accounts.google.com/ youtube.com *.youtube.com *.twitter.com *.giscus.app;
  img-src * blob: data:;
  worker-src https://localhost:9000/static/~partytown/partytown-sw.js http://localhost:9000/~partytown/debug/partytown-sw.js https://mansbooks.com/~partytown/debug/partytown-sw.js https://mansbooks.com/_next/static/~partytown/partytown-sw.js https://my-worker.donaldboulton.workers.dev https://mansbooks.com/sw.js https://mansbooks.com/partytown-sw.js http://localhost:9000/sw.js http://localhost:9000/partytown-sw.js http://localhost:9000/static/~partytown/partytown-sw.js;
  media-src https://my-worker.donaldboulton.workers.dev/images https://res.cloudinary.com/mansbooks/video/upload/vc_auto/v1/videos/Angelina_Jordan_-_Love_Dont_Let_Me_Go_-Visualizer-.mp4 *.res.cloudinary.com *.youtube.com *.raw.githubusercontent.com;
  connect-src *;
  font-src 'self' https://fonts.googleapis.com *.assets.vercel.com *.googleapis.com *.fonts.googleapis.com https://fonts.gstatic.com *.fonts.gstatic.com;
`

const config: GatsbyConfig = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
  headers: [
    {
      source: `/(.*)`,
      headers: [
        {
          source: `Content-Security-Policy`,
          headers: ContentSecurityPolicy.replace(/\n/g, ''),
        },
      ],
    },
  ],
  headers: [
    {
      source: `/contact`,
      headers: [
        {
          key: 'Link',
          value:
            'https://unpkg.com/leaflet@1.9.2/dist/leaflet.css; rel=stylesheet; as=stylesheet  crossorigin=anonymous integrity=sha512-UkezATkM8unVC0R/Z9Kmq4gorjNoFwLMAWR/1yZpINW08I79jEKx/c8NlLSvvimcu7SL8pgeOnynxfRpe+5QpA==',
        },
      ],
    },
  ],
  headers: [
    {
      source: `*`,
      headers: [
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
        // Opt-out of Google FLoC: https://amifloced.org/
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
        {
          key: 'X-Robots-Tag',
          value: 'index',
        },
        {
          key: 'Vary',
          value: 'accept-encoding',
        },
        {
          key: 'Access-Control-Max-Age',
          value: '3600',
        },
        {
          key: 'Access-Control-Allow-Credentials',
          value: 'true',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value: 'Content-Type, Authorization, Time-Zone',
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'POST, GET, PUT, DELETE, PATCH, OPTIONS, HEAD',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=2592000',
        },
      ],
    },
  ],
  siteMetadata: {
    title: 'PubliusLogic',
    twitterUsername: '@donboulton',
    author: {
      name: 'Donald Boulton',
      url: 'https://donboulton.com',
      summary: 'Who Resides in OKC.',
    },
    description:
      'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
    siteUrl: 'https://publiuslogic.com',
    siteImage: './static/images/jpg/dbbg.jpg',
    siteRss: 'https://publiuslogic.com/rss.sml',
    siteSitemap: 'https://publiuslogic.com/sitemap.xml',
    location: 'OKC, Middle Earth',
    social: {
      email: 'mailto:donboulton@donboulton.com',
      phone: 'tel:+405-863-2165',
      facebook: 'https://www.facebook.com/don.boulton',
      instagram: 'https://www.instagram.com/boulton3662',
      twitter: 'https://twitter.com/donboulton',
      linkedin: 'https://www.linkedin.com/donboulton',
      github: 'https://github.com/donaldboulton/',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-remark-embed-video-ext',
      options: {
        width: 800,
        ratio: 1.77 /* Optional: Defaults to 16/9 = 1.77 */,
        related: false /* Optional: Will remove related videos from the end of an embedded YouTube video. */,
        noIframeBorder: true /* Optional: Disable insertion of <style> border: 0 */,
        loadingStrategy: 'lazy' /* Optional: Enable support for lazy-load offscreen iframes. Default is disabled. */,
        containerClass:
          'embedVideo-container' /* Optional: Custom CSS class for iframe container, for multiple classes separate them by space */,
        sandboxOpts: 'allow-same-origin allow-scripts allow-popups allow-presentation',
        iframeId:
          false /* Optional: if true, iframe's id will be set to what is provided after 'youtube:' (YouTube IFrame player API requires iframe id) */,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 80,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets/`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img/`,
        name: 'img',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdx',
        path: `${__dirname}/src/mdx/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
              showCaptions: true,
              linkImagesToOriginal: true,
              backgroundColor: 'none',
              disableBgImage: true,
              withWebp: true,
              loading: 'lazy',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '64',
              icon: '<svg fill="#6d28d9" x="10px" className="inline-block ml-3 h-6 w-6 bottom-1 text-violet-600" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>',
              maintainCase: false,
              enableCustomId: true,
              removeAccents: false,
              isIconAfterHeader: true,
              elements: ['h2', 'h3'],
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-acronyms',
            options: {
              acronyms: siteAcronyms,
            },
          },
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: {
                  classes: 'danger',
                },
                success: {
                  classes: 'success',
                },
                sunny: {
                  classes: 'sunny',
                },
                dark: {
                  classes: 'dark',
                },
                code: {
                  classes: 'code',
                },
                summary: {
                  classes: 'summary',
                },
                info: {
                  title: 'optional',
                  details: 'true',
                },
              },
            },
          },
        ],
        remarkPlugins: [{ resolve: 'remark-slug' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PubliusLogic',
        short_name: 'publiuslogic',
        start_url: '/',
        background_color: fullConfig.theme.colors.slate['900'],
        theme_color: fullConfig.theme.colors.slate['900'],
        display: 'minimal-ui',
        icon: 'static/img/android-chrome-512x512.png',
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000,
        skipIndexing: false,
      },
    },
    'gatsby-plugin-mdx-embed',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')(tailwindConfig),
          require('autoprefixer'),
          ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : []),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [
          '/',
          '/about',
          '/contact',
          '/blog/*',
          '/privacy',
          '/thanks',
          '/gallery',
          '/old-enough',
          '/tags',
        ],
        workboxConfig: {
          importWorkboxFrom: 'cdn',
        },
      },
    },
  ],
}

export default config
