import * as React from 'react'
import { useEffect, useState, Fragment } from 'react'
import { Link } from 'gatsby'
import { Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { ViewListIcon } from '@heroicons/react/outline'
import WavyHr from '@/components/WavyHr'

// https://haseebmajid.dev/blog/toc-in-gatsby#toc
const headings = [
  {
    value: 'h2',
    depth: 1,
  },
  {
    value: 'h3',
    depth: 2,
  },
]

interface TableOfContentProps {
  headings: Array<{ heading: string; title: string; depth: number; activeId: string }>
}

export type HeadingType = {
  value: string
  depth: number
}

type HeadingQueryType = {
  allMdx: {
    headings: {
      value: string
      depth: number
    }[]
  }
}

function getIds(headings) {
  return headings.reduce((acc, heading) => {
    if (heading.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(heading.url.slice(1))
    }
    if (heading.headings) {
      acc.push(...getIds(heading.headings))
    }
    return acc
  }, [])
}

function useActiveId(headingIds) {
  const [activeId, setActiveId] = useState()
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%' }
    )
    headingIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })
    return () => {
      headingIds.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [headingIds])
  return activeId
}

const virtualReference = {
  getBoundingClientRect() {
    return {
      top: 10,
      bottom: 20,
      left: 0,
      height: 50,
    }
  },
}
const TableOfContent = ({ headings }: TableOfContentProps) => {
  const idList = getIds(headings)
  const activeId = useActiveId(idList)
  // https://headlessui.dev/react/popover#positioning-the-panel
  const [referenceElement, setReferenceElement] = useState()
  const [popperElement, setPopperElement] = useState()
  const { styles, attributes } = usePopper(virtualReference, referenceElement, popperElement)
  return (
    <div className="fixed left-1 mb-4 pb-4 md:left-1 z-10 top-3/4 w-32">
      <Popover as="div">
        {({ open }) => (
          <>
            <Popover.Button
              ref={setReferenceElement}
              className="bg-slate-700 w-auto h-auto rounded-r-md pr-2 pt-2 pb-0 -ml-1 text-slate-200"
            >
              <span className="inline-flex headings-center">
                <ViewListIcon className="w-8 h-8 ml-2 text-slate-200" />
              </span>
            </Popover.Button>
            <Popover.Overlay className={`${open ? 'opacity-30 fixed inset-0' : 'opacity-0'} bg-black`} />
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel
                className="relative w-64 h-64"
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                <div className="rounded-lg shadow-lg ring-1 mt-2 ml-2 mr-2 bg-slate-800 ring-black ring-opacity-5 opacity-75">
                  Table Of Contents
                  <div className="text-slate-200 text-xl text-center underline underline-offset-2 decoration-wavy decoration-fuchsia-600"></div>
                  <WavyHr className="mt-1 mb-1" />
                  <nav className="overflow-y-auto overflow-x-hidden nav-scroll h-96 w-auto">
                    <ul className="flex flex-col">
                      {headings.map(heading => {
                        if (heading.depth > 4) {
                          return <div />
                        }

                        return (
                          <li className="p-1 ml-1 mb-2 mt-2 mr-1 list-none" key={heading.value}>
                            <Link
                              className="hover:text-slate-300 transition duration-300 underline underline-offset-8 decoration-wavy decoration-fuchsia-600"
                              rel="noopener noreferrer"
                              to={`#${heading.value.replace(/\s+/g, '-').toLowerCase()}`}
                            >
                              {heading.value} {activeId}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default TableOfContent
