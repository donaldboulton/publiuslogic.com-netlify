import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import ColumnGridTwo from '@/components/ColumnGridTwo'
import Subscriptions from '@/components/Subscriptions'

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-950 pb-6 pt-8 w-full">
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
            <polygon className="fill-current text-slate-950" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold text-slate-300">Let's keep in touch!</h4>
              <h5 className="mb-2 mt-0 text-lg text-gray-100">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-4">
                <div className="mt-4">
                  <ColumnGridTwo>
                    <div className="mr-2 mb-2">
                      <span className="group relative flex items-center text-slate-300">
                        <StaticImage
                          layout="fixed"
                          className="h-8 w-8 self-center rounded-full"
                          formats={['auto', 'webp']}
                          src="../../../static/img/donald-boulton-80.jpg"
                          width={32}
                          height={32}
                          quality={95}
                          alt="Profile picture"
                          loading="lazy"
                        />
                        <a
                          className="hover:text-wine-300"
                          href="https://donboulton.com"
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-describedby="AJ Official"
                          area-label="AJ Official"
                        >
                          <span className="pl-2 text-xl">D.W.B's Website</span>
                        </a>
                      </span>
                    </div>
                    <div className="mr-2 mb-2">
                      <span className="group relative flex items-center text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 self-center" viewBox="0 0 16 16">
                          <g fillRule="evenodd" clipRule="evenodd">
                            <path
                              fill="#F44336"
                              d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                            />
                            <path fill="#FAFAFA" d="M6 11.5v-6l5 3z" />
                          </g>
                        </svg>
                        <a
                          className="hover:text-wine-300"
                          href="https://www.youtube.com/channel/UCHED4RFSxXXNGDDvWpgzHXg"
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-describedby="YouTube Channel"
                          area-label="YouTube Channel"
                        >
                          <span className="pl-2 text-xl">YouTube Channel</span>
                        </a>
                      </span>
                    </div>
                  </ColumnGridTwo>
                  <ColumnGridTwo>
                    <div className="mr-2 mb-2">
                      <span className="group relative flex items-center text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 102 102">
                          <defs>
                            <radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                              <stop offset=".09" stopColor="#fa8f21" />
                              <stop offset=".78" stopColor="#d82d7e" />
                            </radialGradient>
                            <radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                              <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
                              <stop offset="1" stopColor="#8c3aaa" />
                            </radialGradient>
                          </defs>
                          <path
                            fill="url(#a)"
                            d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                            data-name="Path 16"
                          />
                          <path
                            fill="url(#b)"
                            d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                            data-name="Path 17"
                          />
                          <path
                            fill="#fff"
                            d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                            data-name="Path 18"
                            transform="translate(-422.637 -426.196)"
                          />
                        </svg>
                        <a
                          href="https://www.instagram.com/donboulton"
                          className="hover:text-wine-300"
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-describedby="AJ Instagram"
                          area-label="AJ Instagram"
                        >
                          <span className="pl-2 text-xl">AJ Instagram</span>
                        </a>
                      </span>
                    </div>
                    <div className="mr-2 mb-2">
                      <span className="group relative flex items-center text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="block h-8 w-8" viewBox="0 0 16 16">
                          <g fillRule="evenodd" clipRule="evenodd">
                            <path
                              fill="#F44336"
                              d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                            />
                            <path fill="#FAFAFA" d="M6 11.5v-6l5 3z" />
                          </g>
                        </svg>
                        <a
                          href="https://www.youtube.com/watch?v=kjwD884SYRE&list=PLTa09znYPWvKpWlZAAF3v2KEa4b7_tMBf"
                          className="hover:text-wine-300"
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-describedby="AJ Playlists"
                          area-label="AJ Playlists"
                        >
                          <span className="pl-2 text-xl">AJ Playlists</span>
                        </a>
                      </span>
                    </div>
                  </ColumnGridTwo>
                  <ColumnGridTwo>
                    <div className="mr-2">
                      <span className="group relative flex items-center text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="126.445 2.281 589 589">
                          <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" />
                          <path
                            fill="#fff"
                            d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                          />
                        </svg>
                        <a
                          href="https://www.facebook.com/don.boulton"
                          className="hover:text-wine-300"
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-describedby="DB Facebook"
                          area-label="DB Facebook"
                        >
                          <span className="pl-2 text-xl">Facebook</span>
                        </a>
                      </span>
                    </div>
                    <div className="mr-2">
                      <span className="group relative flex items-center text-slate-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          imageRendering="optimizeQuality"
                          shapeRendering="geometricPrecision"
                          textRendering="geometricPrecision"
                          viewBox="0 0 512 512"
                        >
                          <defs>
                            <linearGradient
                              id="b"
                              x1="67.83"
                              x2="474.19"
                              y1="82.42"
                              y2="389.98"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#67c4ce" />
                              <stop offset="1" stopColor="#e62a58" />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#a)"
                            d="M256 0c141.39,0 256,114.61 256,256 0,141.39 -114.61,256 -256,256 -141.39,0 -256,-114.61 -256,-256 0,-141.39 114.61,-256 256,-256z"
                          />
                          <path
                            fill="#fff"
                            d="M313.5 106.01c0.01,4.58 1.36,70.83 70.87,74.96 0,19.1 0.02,32.95 0.02,51.18 -5.26,0.3 -45.76,-2.64 -70.97,-25.12l-0.08 99.64c0.96,69.16 -49.93,111.24 -116.46,96.7 -114.71,-34.31 -76.59,-204.44 38.59,-186.24 0,54.93 0.03,-0.01 0.03,54.93 -47.58,-7 -63.5,32.58 -50.85,60.93 11.5,25.8 58.88,31.39 75.41,-5.01 1.87,-7.12 2.8,-15.25 2.8,-24.37l0 -197.85 50.64 0.25z"
                          />
                        </svg>
                        <a
                          href="https://www.tiktok.com/@donaldboulton"
                          className="hover:text-wine-300"
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-describedby="AJ TikTok"
                          area-label="AJ TikTok"
                        >
                          <span className="pl-2 text-xl">TikTok</span>
                        </a>
                      </span>
                    </div>
                  </ColumnGridTwo>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-slate-300">Subscriptions</h4>
                <h5 className="mb-2 mt-0 text-lg text-slate-300">Get exclusive newsletter-only content now and then</h5>
                <Subscriptions />
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top -mb-2 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-lg font-semibold uppercase text-slate-300">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/blog/about"
                        aria-label="About Link"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/blog"
                        aria-label="Blog Link"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/contact"
                        aria-label="Contact Link"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/profile"
                        aria-label="Profile Link"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/search"
                        aria-label="Search Link"
                      >
                        Search Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/sitemap.xml"
                        aria-label="Sitemap Link"
                      >
                        Sitemap XML
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-lg font-semibold uppercase text-gray-100">Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/blog/obsd-license"
                        aria-label="OBSD License Link"
                      >
                        BSD License
                      </Link>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
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
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
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
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/blog/terms"
                        aria-label="Terms Link"
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/blog/privacy"
                        aria-label="Privacy Link"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-lg font-semibold text-slate-300 hover:text-wine-300"
                        to="/sitemap-posts.xml"
                        aria-label="Posts XML"
                      >
                        Posts XML
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="py-1 text-lg font-semibold text-slate-300">
                © 2023 Publiuslogic by{' '}
                <a
                  href="https://donboulton.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  area-label="Donald Boulton Visualizer's Web Site"
                  className="text-slate-300 hover:text-wine-300"
                >
                  Visualizer
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
