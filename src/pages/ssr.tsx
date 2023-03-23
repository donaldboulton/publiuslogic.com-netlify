import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import PageImage from '../../static/assets/SSR_for_blog_article_and_G4_overview_page.jpg'

function refreshPage() {
  if (typeof window !== undefined) {
    window.location.reload(false)
  }
}

const SsrPage = ({ serverData }) => {
  return (
    <>
      <Layout>
        <PageHero title="SSR" description="Sever Side Rendering." image={PageImage} />
        <div className="mt-10">
          <div className="mx-auto mt-16 mb-32 max-w-md overflow-hidden rounded-xl bg-slate-300 text-slate-900 shadow-md dark:bg-slate-900 dark:text-slate-200 md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" alt="doggo" src={serverData.message} />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                  SSR: Server Side Rendering
                </div>
                <div>
                  <Link
                    to="/blog/gatsby-version-four/#ssr-example"
                    className="mt-2 block text-lg font-medium leading-tight text-wine-300 hover:text-wine-300 hover:underline"
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
                    className="rounded-md border border-transparent bg-wine-300 p-2 text-sm font-medium text-slate-300 shadow-lg shadow-wine-300/50 hover:bg-wine-300"
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
    </>
  )
}

export default SsrPage

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
