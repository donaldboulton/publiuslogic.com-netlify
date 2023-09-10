import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon, MenuIcon, XIcon, UserGroupIcon, PhotographIcon, MapIcon, HomeIcon } from '@heroicons/react/outline'

const Stacked = () => {
  return (
    <div className="flex -space-x-2">
      <StaticImage
        className="inline-block h-12 w-12 rounded-full ring-2 ring-wine-300"
        src="../../static/img/angelina-jordan-icon-32x32.png"
        alt="Image Description"
        formats={['auto', 'webp']}
        width={48}
        height={48}
        quality={95}
      />
      <StaticImage
        className="inline-block h-12 w-12 rounded-full ring-2 ring-wine-300"
        formats={['auto', 'webp']}
        width={48}
        height={48}
        quality={95}
        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <StaticImage
        className="inline-block h-12 w-12 rounded-full ring-2 ring-wine-300"
        formats={['auto', 'webp']}
        width={48}
        height={48}
        quality={95}
        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
        alt="Image Description"
      />
      <StaticImage
        className="inline-block h-12 w-12 rounded-full ring-2 ring-wine-300"
        formats={['auto', 'webp']}
        width={48}
        height={48}
        quality={95}
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <div className="hs-dropdown relative inline-flex [--placement:top-left]">
        <button
          id="hs-dropdown-avatar-more"
          className="hs-dropdown-toggle inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 border-2 border-white font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800"
        >
          <span className="font-medium leading-none">9+</span>
        </button>

        <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            Chris Lynch
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            Maria Guan
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            Amil Evara
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            Ebele Egbuna
          </a>
        </div>
      </div>
      <Menu as="div" className="relative ml-1 inline-flex">
        <div>
          <Menu.Button className="flex rounded-full text-sm focus:outline-none">
            <span className="sr-only">Open Control Menu</span>
            <span
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 border-2 border-white font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800"
              aria-hidden="true"
              aria-label="Old Enough"
            />
            <span className="font-medium leading-none">9+</span>
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
          <Menu.Items className="ring-black absolute right-0 mt-3 w-48 origin-top-right rounded-md bg-slate-900 py-1 text-slate-200 opacity-75 shadow-lg ring-1 ring-opacity-5 hover:opacity-100 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  aria-label="Login"
                  to="/login"
                  className={classNames(
                    active ? 'bg-slate-700' : '',
                    'ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300'
                  )}
                >
                  <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                    <UserGroupIcon aria-label="Login" className="block h-8 w-9 pr-2 text-wine-300" aria-hidden="true" />
                    <span>Login</span>
                  </span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  aria-label="Old Enough"
                  to="/old-enough"
                  className={classNames(
                    active ? 'bg-slate-700' : '',
                    'ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300'
                  )}
                >
                  <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                    <StaticImage
                      layout="fixed"
                      className="block h-8 w-8 pr-2"
                      src="../../../static/img/angelina-jordan-icon.png"
                      width={32}
                      height={32}
                      quality={95}
                      alt="Angelina Jordan"
                      loading="lazy"
                    />
                    <span className="pl-1">Old Enough</span>
                  </span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  aria-label="Profile Button"
                  className={classNames(
                    active ? 'bg-slate-700' : '',
                    'ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300'
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
                  aria-label="Gallery"
                  to="/gallery"
                  className={classNames(
                    active ? 'bg-slate-700' : '',
                    'ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300'
                  )}
                >
                  <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                    <PhotographIcon
                      aria-label="Gallery"
                      className="block h-8 w-9 pr-2 text-wine-300"
                      aria-hidden="true"
                    />
                    <span>Gallery</span>
                  </span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  aria-label="Sitemap"
                  target="_blank"
                  to="https://publiuslogic.com/sitemap.xml"
                  className={classNames(
                    active ? 'bg-slate-700' : '',
                    'ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300'
                  )}
                >
                  <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                    <MapIcon className="text-green-600 block h-9 w-9 pr-2" aria-hidden="true" />
                    <span>Sitemap</span>
                  </span>
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Stacked
