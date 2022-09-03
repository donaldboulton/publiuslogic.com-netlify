import * as React from 'react'
import { Link } from 'gatsby'
import SiteMetadata from '@/utils/sitemetadata'
import A from '@/components/A'
import Subscriptions from '@/components/Subscriptions'
import LinkedIn from '../../../static/svg/icons/linkedin.inline.svg'
import Facebook from '../../../static/svg/icons/facebook.inline.svg'
import Instagram from '../../../static/svg/icons/instagram.inline.svg'
import Twitter from '../../../static/svg/icons/twitter.inline.svg'
import Github from '../../../static/svg/icons/github.inline.svg'

export default function IndexFooter() {
  const metadata = SiteMetadata().siteMetadata
  const social = metadata.social

  const socialLinks = [
    { name: 'LinkedIn', link: 'linkedin' in social ? social.linkedin : null, image: LinkedIn },
    { name: 'Facebook', link: 'facebook' in social ? social.facebook : null, image: Facebook },
    { name: 'Instagram', link: 'instagram' in social ? social.instagram : null, image: Instagram },
    { name: 'Twitter', link: 'twitter' in social ? social.twitter : null, image: Twitter },
    { name: 'Github', link: 'github' in social ? social.github : null, image: Github },
  ]

  return (
    <>
      <footer className="relative bg-gray-600 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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
            <polygon className="text-gray-600 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-gray-200">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-100">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-4">
                <span className="inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
                  {socialLinks.map(s =>
                    s.link ? (
                      <A href={s.link} className="ml-3" external>
                        <s.image className=" h-6 w-6" />
                        <span className="sr-only">{s.name}</span>
                      </A>
                    ) : (
                      ''
                    )
                  )}
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-semibold text-gray-200">Subscriptions</h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-200">Get exclusive newsletter-only content now and then</h5>
                <Subscriptions />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top -mb-2">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/blog/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/profile"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/search"
                      >
                        Search Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/sitemap.xml"
                      >
                        Sitemap XML
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-100 text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/blog/0bsd-licence"
                      >
                        BSD License
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        rel="noopener noreferrer"
                        target="_blank"
                        area-label="Github"
                        href="https://www.github.com/donaldboulton"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        rel="noopener noreferrer"
                        target="_blank"
                        area-label="Gatsby Starter Basic Instructions"
                        href="https://github.com/donaldboulton/gatsby-starter-basic-instructions"
                      >
                        Free Starters
                      </a>
                    </li>
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/blog/privacy"
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/blog/privacy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-200 hover:text-fuchsia-500 font-semibold block pb-2 text-sm"
                        to="/rss.xml"
                      >
                        Site Rss
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-200 font-semibold py-1">
                © {new Date().getFullYear()} Publiuslogic by{' '}
                <a
                  href="https://donboulton.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  area-label="Donald Boulton Web Site"
                  className="text-gray-200 hover:text-fuchsia-500"
                >
                  Donald W. Boulton
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
