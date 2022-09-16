import * as React from 'react'
import type { HeadProps } from 'gatsby'
import { NetlifyForm, Honeypot, Recaptcha } from 'react-netlify-forms'
import SiteMetadata from '@/utils/sitemetadata'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'
import ScrollIndicator from '@/components/ScrollIndicator'
import Map from '@/components/Map'
import Email from '../../static/svg/icons/email.inline.svg'
import Phone from '../../static/svg/icons/phone.inline.svg'
import LinkedIn from '../../static/svg/icons/linkedin.inline.svg'
import Facebook from '../../static/svg/icons/facebook.inline.svg'
import Instagram from '../../static/svg/icons/instagram.inline.svg'
import Twitter from '../../static/svg/icons/twitter.inline.svg'
import Github from '../../static/svg/icons/github.inline.svg'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Stars from '@/components/Stars'

import Image from '../../static/svg/undraw/undraw_contact_us_-15-o2.svg'
import OGImage from '../../static/images/undraw/undraw_contact_us_15o2.png'

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

function ContactUs() {
  const metadata = SiteMetadata().siteMetadata
  const SITE_RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

  const contactMethods = [
    { name: 'Email', link: 'email' in metadata.social ? metadata.social.email : null, image: Email },
    { name: 'Phone', link: 'phone' in metadata.social ? metadata.social.phone : null, image: Phone },
    { name: 'LinkedIn', link: 'linkedin' in metadata.social ? metadata.social.linkedin : null, image: LinkedIn },
    { name: 'Facebook', link: 'facebook' in metadata.social ? metadata.social.facebook : null, image: Facebook },
    { name: 'Instagram', link: 'instagram' in metadata.social ? metadata.social.instagram : null, image: Instagram },
    { name: 'Twitter', link: 'twitter' in metadata.social ? metadata.social.twitter : null, image: Twitter },
    { name: 'Github', link: 'github' in metadata.social ? metadata.social.github : null, image: Github },
  ]
  return (
    <>
      <Header />
      <ScrollIndicator />
      <Stars />
      <Layout>
        <main className="mt-10">
          <article className="post">
            <header>
              <PageHero
                title="Contact Us"
                description="Our presence is real and digital. Contact us through the following ways."
                image={Image}
              />
            </header>
          </article>
          <Map />
          <div className="mt-10 sm:mt-0 p-8 text-black dark:text-white">
            <div className="lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="lg:col-span-1">
                <div className="px-4 sm:px-0">
                  {contactMethods.map(method =>
                    method.link ? (
                      <p key={method.name} className="mt-2 flex items-center text-sm text-black dark:text-white">
                        <method.image className=" h-5 w-5" />
                        <span>&nbsp;{method.name}:&nbsp;</span>
                        <a
                          href={method.link}
                          className="text-rose-600 hover:text-rose-500"
                          rel="noopener noreferrer"
                          target="_blank"
                          area-label="Github"
                        >
                          {method.link}
                        </a>
                      </p>
                    ) : (
                      ''
                    )
                  )}
                </div>
              </div>
              <div className="mt-5 lg:mt-0 lg:col-span-2 mb-24 rounded-lg bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200">
                <NetlifyForm
                  method="POST"
                  name="contact"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  formProps={{ id: 'contact' }}
                  enableRecaptcha
                  onSuccess={(response, context) => {
                    console.log('Successfully sent form data to Netlify Server')
                    context.formRef.current.reset()
                  }}
                >
                  {({ handleChange, success, error }) => (
                    <>
                      <Honeypot />
                      <Recaptcha siteKey={SITE_RECAPTCHA_KEY} theme="dark" invisible />
                      <p className="hidden">
                        <label>
                          Don not fill this out if you are human: <input name="bot-field" />
                        </label>
                      </p>
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 text-black dark:text-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-6">
                              <label htmlFor="name" className="block text-sm font-medium">
                                Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="off"
                                required
                                placeholder="Enter your Name here."
                                className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-span-6">
                              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white">
                                Email address
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                required
                                placeholder="Enter your Email here."
                                className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md peer ..."
                                onChange={handleChange}
                              />
                              <p class="invisible peer-invalid:visible text-pink-600 text-sm">
                                Please provide a valid email address.
                              </p>
                            </div>

                            <div className="col-span-6">
                              <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-white">
                                Phone
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                autoComplete="off"
                                required
                                placeholder="Enter Phone Number here."
                                className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-span-6">
                              <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-white">
                                Subject
                              </label>
                              <input
                                type="text"
                                name="subject"
                                id="subject"
                                autoComplete="on"
                                required
                                placeholder="Enter your Subject here."
                                className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-span-6">
                              <label htmlFor="text" className="block text-sm font-medium text-black dark:text-white">
                                Message
                              </label>
                              <textarea
                                className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md caret-blue-500 focus:caret-indigo-500"
                                rows={5}
                                name="text"
                                required
                                placeholder="Enter your message here."
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 text-left sm:px-6 bg-slate-300 dark:bg-slate-900">
                          {success && <p className="text-rose-500">Will get back to you A.S.A.P!</p>}
                          {error && <p className="text-rose-500">Sorry, we could not reach our servers.</p>}
                          <button
                            type="submit"
                            className="inline-flex justify-center mr-2 py-2 px-4 text-white rounded-md transition ease-in-out delay-150 bg-fuchsia-500 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 shadow-lg hover:shadow-fuchsia-700/50 duration-300"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </NetlifyForm>
              </div>
            </div>
          </div>
        </main>
      </Layout>
      <Footer />
    </>
  )
}

export default ContactUs

export function Head(props: HeadProps) {
  return (
    <>
      <SEO type="page" title="Contact" description="Contact" image={ogimage} pathname="/contact">
        <title>Contact</title>
        <meta name="description" content="PubliusLogic Contact Page." />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
      </SEO>
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
            url: 'https://publiuslogic.com/static/images/undraw/undraw_contact_us_15o2.png',
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
          name: 'Thank You',
          url: 'https://publiuslogic.com/contact',
          image: {
            '@type': 'ImageObject',
            url: 'https://publiuslogic.com/static/images/undraw/undraw_contact_us_15o2.png',
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
                '@id': 'https://publiuslogic.com/contact',
                name: 'Contact',
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
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
        integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
        crossorigin="anonymous"
      />
    </>
  )
}
