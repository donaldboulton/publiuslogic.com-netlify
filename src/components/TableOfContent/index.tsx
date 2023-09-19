"use client"

import * as React from 'react'
import { useEffect, useState, Fragment } from 'react'
import { Link } from 'gatsby'
import { Popover, Transition } from '@headlessui/react'
import { TableCellsIcon } from '@heroicons/react/24/outline'
import WavyHr from '@/components/WavyHr'

interface TableOfContentProps {
  headings: Array<{ heading: string; title: string; depth: number; activeId: string }>
}

export type HeadingType = {
  value: string
  depth: number
}

function getIds(headings) {
  return headings.reduce((acc, heading) => {
    if (heading.url) {
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

const TableOfContent = ({ headings }: TableOfContentProps) => {
  const idList = getIds(headings)
  const activeId = useActiveId(idList)
  return (
    <div className="fixed left-1 top-1/4 z-10 mb-4 w-32 pb-4 md:left-1">
      <Popover as="div">
        {({ open }) => (
          <>
            <Popover.Button className="bg-slate-400 -ml-1 h-auto w-auto rounded-r-md pb-0 pr-2 pt-2 text-slate-900 dark:bg-slate-950 dark:text-slate-300">
              <span className="headings-center inline-flex">
                <TableCellsIcon className="ml-2 h-8 w-8 text-slate-900 dark:text-slate-300" />
              </span>
            </Popover.Button>
            <Popover.Overlay className={`${open ? 'fixed inset-0 opacity-30' : 'opacity-0'} bg-black`} />
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel className="relative h-64 w-64">
                <div className="ring-black ml-2 mr-2 mt-2 rounded-lg bg-slate-300 opacity-75 shadow-lg ring-1 ring-opacity-5 dark:bg-slate-800">
                  <div className="mt-2 text-center underline decoration-wine-200 decoration-wavy underline-offset-2">
                    Table Of Contents
                  </div>
                  <div className="text-center text-xl text-slate-900 underline decoration-wine-200 decoration-wavy underline-offset-2 dark:text-slate-300"></div>
                  <WavyHr className="mb-1 mt-1" />
                  <nav className="nav-scroll h-96 w-auto overflow-y-auto overflow-x-hidden">
                    <ul className="flex flex-col">
                      {headings.map(heading => {
                        if (heading.depth > 4) {
                          return <div />
                        }

                        return (
                          <li className="mb-2 ml-1 mr-1 mt-2 list-none p-1" key={heading.value}>
                            <Link
                              className="underline decoration-wine-200 decoration-wavy underline-offset-8 transition duration-300 hover:text-slate-800 dark:hover:text-slate-300"
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
