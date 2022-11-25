import * as React from 'react'
import { Link } from 'gatsby'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  GlobeAltIcon,
  BanIcon,
  BeakerIcon,
  CakeIcon,
  ScaleIcon,
  CodeIcon,
  HandIcon,
  HeartIcon,
  LibraryIcon,
  LinkIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

const posts = [
  {
    name: 'Creation',
    description: 'Creation of All Things',
    href: '/blog/creation-of-all',
    icon: SparklesIcon,
  },
  {
    name: 'Gatsby v5',
    description: 'Gatsby v5 partial Hydration and Slices',
    href: '/blog/gatsby-version-five',
    icon: CodeIcon,
  },
  {
    name: 'War Machine',
    description: 'Kiddy Playtime War Toys',
    href: '/blog/war-machine',
    icon: GlobeAltIcon,
  },
  {
    name: 'Commandments',
    description: 'Commandments',
    href: '/blog/commandments',
    icon: ScaleIcon,
  },
  {
    name: 'Applause',
    description: 'Applause useSound Confetti',
    href: '/blog/applause-use-sound-confetti',
    icon: HandIcon,
  },
  {
    name: 'USA Election',
    description: 'Scandal-Less Non Sense',
    href: '/blog/usa-election',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Jew Who',
    description: 'Who are the Jewish People',
    href: '/blog/jew-who',
    icon: BanIcon,
  },
  {
    name: 'Cookie Consent',
    description: 'Gatsby GDPR Cookie Consent',
    href: '/blog/cookies',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Cyber Attack',
    description: 'My Cyber Attack',
    href: '/blog/cyber-attack',
    icon: ShieldExclamationIcon,
  },
  {
    name: 'Trinity of Man',
    description: 'The Holy, Lost, & Evil Ones',
    href: '/blog/trinity-of-man',
    icon: UserGroupIcon,
  },
  {
    name: 'React Netlify Forms',
    description: 'Secured Netlify Forms',
    href: '/blog/react-netlify-forms',
    icon: BeakerIcon,
  },
  {
    name: 'Government',
    description: 'United People of America',
    href: '/blog/government',
    icon: LibraryIcon,
  },
  {
    name: 'Virtue',
    description: 'What is Needed Virtue',
    href: '/blog/virtue',
    icon: HeartIcon,
  },
  {
    name: 'React Hook Form',
    description: 'Secured React Forms',
    href: '/blog/react-hook-form',
    icon: CakeIcon,
  },
  {
    name: 'Vaccination',
    description: 'No Do Not Do It',
    href: '/blog/vaccination',
    icon: PresentationChartLineIcon,
  },
]

function HeaderPopover() {
  return (
    <div className="z-20 w-full max-w-sm px-2">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md px-3 py-2 text-lg text-white hover:bg-gray-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-opacity-75`}
            >
              <span>Featured</span>
              <ChevronDownIcon
                className={`${open ? 'rotate-180 transform text-red-600' : 'text-opacity-75'}
                  ml-1 h-5 w-5 text-gray-200 transition duration-150 ease-in-out group-hover:text-opacity-75`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-screen max-w-md -translate-x-1/2 transform px-4 sm:px-0 lg:ml-20 lg:max-w-4xl">
                <div className="overflow-hidden rounded-lg bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5">
                  <nav className="nav-scroll">
                    <div className="relative grid h-96 max-h-full gap-8 bg-slate-800 p-7 md:max-h-screen lg:grid-cols-3">
                      {posts.map(item => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-purple-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-purple-800 p-2 text-slate-200 hover:bg-purple-900 hover:text-rose-600 sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-rose-500 hover:text-rose-600">{item.name}</p>
                            <p className="text-sm text-slate-200">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </nav>
                  <div className="bg-purple-800 p-4 hover:bg-purple-900">
                    <a
                      href="https://bibwoe.com/posts/enoch-preface"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-fuchsia-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-lg font-medium text-gray-200">
                          <span className="flex items-center">
                            <LinkIcon className="h-6 w-6 text-fuchsia-400 hover:text-fuchsia-500" />
                            &nbsp; Books Of Enoch and The Last Testament
                          </span>
                        </span>
                      </span>
                      <span className="block text-sm text-gray-200">
                        Enoch Moved to Basic Instructions Books While On Earth!
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default HeaderPopover
