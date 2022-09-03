import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

import OGImage from '../../static/assets/SSR_for_blog_article_and_G4_overview_page.jpg'
import PageImage from '../../static/assets/SSR_for_blog_article_and_G4_overview_page.jpg'

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

function refreshPage() {
  if (typeof window !== undefined) {
    window.location.reload(false)
  }
}

const SSRPage = ({ serverData }) => {
  return (
    <>
      <Header />
      <Layout>
        <PageHero title="SSR" description="Sever Side Rendering." image={PageImage} />
        <div className="mt-10">
          <div className="max-w-md mt-16 mb-32 mx-auto bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" alt="doggo" src={serverData.message} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  SSR: Server Side Rendering
                </div>
                <div>
                  <Link
                    to="/blog/gatsby-version-four/#ssr-example"
                    className="text-fuchsia-600 hover:text-fuchsia-700 block mt-2 text-lg leading-tight font-medium hover:underline"
                  >
                    Back to Post
                  </Link>
                </div>
                <p className="mt-2 text-gray-500">
                  See the Doggies! Doggies of all kinds of shapes, sizes and colors. With many different Breeds!
                </p>
                <p className="mt-2 text-gray-500">SSR Refresh just, "This Component", for More Doggies! Cool!</p>
                <div>
                  <button
                    type="button"
                    className="p-2 border border-transparent text-sm font-medium rounded-md text-gray-200 bg-fuchsia-500 hover:bg-fuchsia-700 shadow-lg shadow-fuchsia-700/50"
                    onClick={refreshPage}
                  >
                    Refresh Component
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export default SSRPage

export async function getServerData() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    if (!res.ok) {
      throw new Error('Response failed')
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
