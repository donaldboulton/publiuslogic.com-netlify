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
    name: 'Gatsby v4',
    description: 'Gatsby v4 with SSR and DSG',
    href: '/blog/gatsby-version-four',
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
    <div className="w-full max-w-sm px-2 z-20">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group px-3 py-2 inline-flex items-center text-lg hover:text-opacity-100 hover:bg-gray-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-opacity-75`}
            >
              <span>Featured</span>
              <ChevronDownIcon
                className={`${open ? 'transform rotate-180 text-red-600' : 'text-opacity-75'}
                  ml-1 h-5 w-5 text-gray-200 group-hover:text-opacity-75 transition ease-in-out duration-150`}
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
              <Popover.Panel className="absolute z-10 w-screen max-w-md lg:ml-20 px-4 mt-2 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-4xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 bg-slate-800 ring-black ring-opacity-5">
                  <nav className="nav-scroll">
                    <div className="relative h-96 max-h-full md:max-h-screen grid gap-8 bg-slate-800 p-7 lg:grid-cols-3">
                      {posts.map(item => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-purple-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center p-2 rounded-md bg-purple-800 hover:bg-purple-900 justify-center flex-shrink-0 w-10 h-10 text-slate-200 hover:text-rose-600 sm:h-12 sm:w-12">
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
                  <div className="p-4 bg-purple-800 hover:bg-purple-900">
                    <a
                      href="https://bibwoe.com/posts/enoch-preface"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-fuchsia-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-lg font-medium text-gray-200">
                          <span className="flex items-center">
                            <LinkIcon className="w-6 h-6 text-fuchsia-400 hover:text-fuchsia-500" />
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
