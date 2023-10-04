import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import clsx from 'clsx'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'

const Stacked = () => {
    return (
        <div className="flex -space-x-2">
            <StaticImage
                className="inline-block h-12 w-12 rounded-full ring-2 ring-wine-300"
                src="../../../static/img/angelina-jordan-icon-32x32.png"
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
            <Menu as="div" className="relative ml-1 inline-flex">
                <Menu.Button className="flex rounded-full text-sm focus:outline-none">
                    <span className="sr-only">Open Control Menu</span>
                    <span
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800"
                        aria-hidden="true"
                        aria-label="Old Enough"
                    />
                    <span className="font-medium leading-none">9+</span>
                </Menu.Button>
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
                                <a
                                    aria-label="Login"
                                    to="/login"
                                    className={clsx(
                                        active ? 'bg-slate-700' : '',
                                        'ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300'
                                    )}
                                >
                                    <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                        <MusicalNoteIcon
                                            aria-label="Old Enough"
                                            className="block h-8 w-9 pr-2 text-wine-300"
                                            aria-hidden="true"
                                        />
                                        <span>Old Enough</span>
                                    </span>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    aria-label="Old Enough"
                                    to="/old-enough"
                                    className={clsx(
                                        active ? 'bg-slate-700' : '',
                                        'ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300'
                                    )}
                                >
                                    <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                        <MusicalNoteIcon
                                            className="block h-8 w-8 pr-2 text-purple-500"
                                            aria-hidden="true"
                                        />
                                        <span>Profile</span>
                                    </span>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    to="/profile"
                                    aria-label="Profile Button"
                                    className={clsx(
                                        active ? 'bg-slate-700' : '',
                                        'ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300'
                                    )}
                                >
                                    <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                        <MusicalNoteIcon
                                            className="block h-8 w-8 pr-2 text-purple-500"
                                            aria-hidden="true"
                                        />
                                        <span>Profile</span>
                                    </span>
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default Stacked
