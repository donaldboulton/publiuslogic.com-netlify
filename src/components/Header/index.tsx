import * as React from 'react'
import { Link } from 'gatsby'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  SearchIcon,
  MenuIcon,
  LoginIcon,
  XIcon,
  UserGroupIcon,
  PhotographIcon,
  MapIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import ThemeToggle from '@/components/ThemeToggle'
import Tooltip from '@/components/Tooltip'
import Control from '@/components/icons/control'
import HeaderPopover from '@/components/HeaderPopover'

const navigation = [
  { name: 'About', href: '/blog/about', current: false },
  { name: 'Blog', href: '/blog', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <>
      <Disclosure as="nav" className="sticky top-0 z-40 bg-gradient-to-r from-gray-900 via-transparent to-gray-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="focus:ring-purple inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center text-lg sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <Tooltip id="logoTooltipSmall" tooltipText="Home Page">
                        <div className="block md:hidden">
                          <HomeIcon
                            className="block h-8 w-8 pr-2 text-sky-500 hover:text-sky-400/20"
                            aria-label="Logo Mobile"
                            aria-describedby="logoTooltipSmall"
                          />
                        </div>
                      </Tooltip>
                    </Link>
                    <Link to="/">
                      <Tooltip id="logoTooltip" tooltipText="Home Page">
                        <div className="flex hidden items-center md:block">
                          <span className="text-2xl text-gray-400">PubliusLogic</span>
                        </div>
                      </Tooltip>
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <>
                        {navigation.map(item => (
                          <Link
                            key={item.name}
                            to={item.href}
                            activeClassName="active"
                            className={classNames(
                              item.current ? 'text-gray-100' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                              'rounded-md px-3 py-2 text-lg font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <HeaderPopover />
                      </>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="p-1">
                    <span className="sr-only">Search</span>
                    <Link to="/search">
                      <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                        <SearchIcon className="h-7 w-8 text-slate-900 text-opacity-75 hover:text-slate-300 dark:text-slate-600" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                  <div className="p-1">
                    <span className="sr-only">Dark Light Modes</span>
                    <ThemeToggle panelClassName="mt-8" aria-hidden="true" />
                  </div>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm focus:outline-none">
                        <span className="sr-only">Open Control Menu</span>
                        <Control
                          className="text-slate-900 text-opacity-75 hover:text-slate-700 dark:text-slate-200"
                          aria-hidden="true"
                          aria-label="DarkMode"
                        />
                        <span className="sr-only">Open Control Menu</span>
                        <ChevronDownIcon
                          className={`${open ? 'rotate-180 transform text-slate-200' : 'text-opacity-75'}
                          -mr-1 mt-1 h-5 text-gray-300 transition duration-150 ease-in-out first-letter:w-5 hover:text-gray-200 group-hover:text-opacity-75`}
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-3 w-48 origin-top-right rounded-md bg-slate-900 py-1 text-slate-200 opacity-75 shadow-lg ring-1 ring-black ring-opacity-5 hover:opacity-100 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={classNames(
                                active ? 'bg-slate-700' : '',
                                'ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white'
                              )}
                              to="/login"
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <LoginIcon className="block h-9 w-9 pr-2 text-red-500" aria-hidden="true" />
                                <span>Login</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(
                                active ? 'bg-slate-700' : '',
                                'ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white'
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <UserGroupIcon className="block h-8 w-8 pr-2 text-purple-500" aria-hidden="true" />
                                <span>Profile</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/gallery"
                              className={classNames(
                                active ? 'bg-slate-700' : '',
                                'ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white'
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <PhotographIcon className="block h-8 w-9 pr-2 text-fuchsia-500" aria-hidden="true" />
                                <span>Gallery</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              target="_blank"
                              to="https://publiuslogic.com/sitemap.xml"
                              className={classNames(
                                active ? 'bg-slate-700' : '',
                                'ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white'
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <MapIcon className="block h-9 w-9 pr-2 text-green-600" aria-hidden="true" />
                                <span>Sitemap</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-slate-200'
                        : 'text-slate-200 hover:bg-slate-600/30 hover:text-slate-200',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
