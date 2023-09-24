import * as React from 'react'
import { Fragment, ReactNode, useRef, useState, FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Dialog, Transition } from '@headlessui/react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import WavyHr from '@/components/WavyHr'

export interface ModalProps {
  dialogContent: JSX.Element
  dialogTitle: string
  children: ReactNode
}

export const Modal: FC<ModalProps> = props => {
  const { dialogTitle, dialogContent, children, ...rest } = props
  const [isOpen, setIsOpen] = useState(true)

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const closeButtonRef = useRef(null)

  return (
    <>
      <div className="fixed left-1 top-1/4 z-10">
        <button
          type="button"
          onClick={openModal}
          className="bg-slate-300 -ml-1 h-auto w-auto rounded-r-md pb-0 pl-3 pr-2 pt-2 text-slate-900 dark:bg-slate-900 dark:text-slate-200"
        >
          <span className="headings-center inline-flex">
            <QuestionMarkCircleIcon className="mt-2 h-8 w-8 px-2 text-slate-900 dark:text-slate-200" />
          </span>
        </button>
      </div>
      <Transition.Root appear show={isOpen} as={Fragment} {...rest}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={closeButtonRef}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="bg-slate-950 fixed inset-0" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-500 dark:bg-slate-950 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden text-slate-900 dark:text-slate-200 sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative inline-block transform overflow-hidden rounded-lg bg-slate-950 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
                  <div className="bg-slate-950 px-4 py-4 text-slate-200 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="float-none mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-400 sm:mx-0 sm:h-10 sm:w-10">
                        <StaticImage
                          className="bio-avatar mb-4 ring ring-purple-500 ring-offset-4"
                          layout="fixed"
                          formats={['auto', 'webp']}
                          src="../../../static/img/angie.jpg"
                          width={48}
                          height={48}
                          quality={95}
                          alt="Profile picture"
                          loading="eager"
                        />
                      </div>
                      <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left">
                        <div>
                          <Dialog.Title
                            key={dialogTitle}
                            as="h3"
                            className="text-lg font-medium leading-6 text-slate-300 dark:text-slate-200"
                          >
                            {dialogTitle}
                          </Dialog.Title>
                        </div>
                        <div className="mt-2">
                          <div key={dialogContent} className="mt-4 text-sm text-slate-900 dark:text-slate-200">
                            {dialogContent}
                          </div>
                        </div>
                      </div>
                      <WavyHr />
                    </div>
                  </div>
                  <div className="mx-4 mt-2 py-2 leading-6 text-slate-900 dark:text-slate-200">{children}</div>
                  <div className="mt-4 py-4">
                    <button
                      ref={closeButtonRef}
                      type="button"
                      className="float-right mb-4 mr-4 rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:text-slate-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Modal
