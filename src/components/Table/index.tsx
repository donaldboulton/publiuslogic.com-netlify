import * as React from 'react'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const Table = () => {
  const tableContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }

  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }

  return (
    <LazyMotion features={loadFeatures}>
      <m.section className="center items-stretch font-sans" variants={tableContainer}>
        <div className="ml-auto mr-auto w-full px-4 opacity-75">
          <m.div
            ref={ref}
            variants={variants}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="nav-scroll relative overflow-x-auto opacity-75 shadow-md">
              <table className="text-md w-full rounded-t-lg text-left text-slate-900 dark:text-slate-200 sm:rounded-md">
                <thead className="text-md rounded-t-lg bg-slate-200 uppercase text-slate-900 dark:bg-slate-800 dark:text-slate-200">
                  <tr>
                    <th scope="col" className="ml-2 px-6 py-3 text-slate-900 dark:text-slate-200">
                      Article Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-slate-900 dark:text-slate-200">
                      Dated
                    </th>
                    <th scope="col" className="px-6 py-3 text-slate-900 dark:text-slate-200">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-slate-900 dark:text-slate-200">
                      Tags
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-500 border-slate-700 bg-slate-900 dark:bg-slate-900">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-slate-200"
                    >
                      <Link
                        to="/blog/playtime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        Playtime
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2020-04-07</td>
                    <td className="px-6 py-4 text-slate-200">Logic</td>
                    <td className="px-6 py-4 text-slate-200">God</td>
                  </tr>
                  <tr className="border-b border-slate-700 bg-slate-300 dark:bg-slate-700">
                    <th
                      scope="row"
                      className="darK:text-slate-100 whitespace-nowrap px-6 py-4 font-medium text-slate-900"
                    >
                      <Link
                        to="/blog/creation-of-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        Creation Of All
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2021-04-04</td>
                    <td className="px-6 py-4 text-slate-200">Creation</td>
                    <td className="px-6 py-4 text-slate-200">Trinity</td>
                  </tr>
                  <tr className="border-b border-slate-700 bg-slate-900 dark:bg-slate-900">
                    <th
                      scope="row"
                      className="whitespace-nowrap border-slate-900 px-6 py-4 font-medium text-slate-900 dark:text-slate-100"
                    >
                      <Link
                        to="/blog/jew-who"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        Jew Who
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2021-04-11</td>
                    <td className="px-6 py-4 text-slate-200">Jewish</td>
                    <td className="px-6 py-4 text-slate-200">Holy Spirit</td>
                  </tr>
                  <tr className="border-b border-slate-700 bg-slate-300 dark:bg-slate-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-slate-100"
                    >
                      <Link
                        to="/blog/works-of-flesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        Works Of Flesh
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2021-04-13</td>
                    <td className="px-6 py-4 text-slate-200">Creation</td>
                    <td className="px-6 py-4 text-slate-200">God</td>
                  </tr>
                  <tr className="border-b border-slate-400 bg-slate-400 dark:border-slate-800 dark:bg-slate-900">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-slate-100"
                    >
                      <Link
                        to="/blog/virtue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        Virtue
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2021-04-22</td>
                    <td className="px-6 py-4 text-slate-200">Creation</td>
                    <td className="px-6 py-4 text-slate-200">Truth</td>
                  </tr>
                  <tr className="border-b border-slate-700 bg-slate-300 dark:bg-slate-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-slate-100"
                    >
                      <Link
                        to="/blog/immorality-abortion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        Immorality Abortion
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2021-10-13</td>
                    <td className="px-6 py-4 text-slate-200">Creation</td>
                    <td className="px-6 py-4 text-slate-200">Murder</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-slate-100"
                    >
                      <Link
                        to="/blog/trinity-of-man"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        Trinity of Man
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2022-04-17</td>
                    <td className="px-6 py-4 text-slate-200">Good Evil</td>
                    <td className="px-6 py-4 text-slate-200">Devil</td>
                  </tr>
                  <tr className="border-b border-slate-700 bg-slate-300 dark:bg-slate-700">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-slate-100"
                    >
                      <Link
                        to="/blog/more-more-more"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        more More MORE
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2022-10-10</td>
                    <td className="px-6 py-4 text-slate-200">Creation</td>
                    <td className="px-6 py-4 text-slate-200">God</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-slate-100"
                    >
                      <Link
                        to="/blog/the-day-the-i"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-200 underline underline-offset-8 hover:text-slate-100 hover:shadow-slate-200/50"
                      >
                        The Day The I
                      </Link>
                    </th>
                    <td className="px-6 py-4 text-slate-200">2022-12-04</td>
                    <td className="px-6 py-4 text-slate-200">Creation</td>
                    <td className="px-6 py-4 text-slate-200">Devil</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  )
}

export default Table
