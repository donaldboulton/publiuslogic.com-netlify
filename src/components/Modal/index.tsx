import * as React from 'react'
import { Fragment, ReactNode, useRef, useState, FC } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import WavyHr from '@/components/WavyHr'
import Help from '@/components/icons/help'

export interface ModalProps {
  dialogContent: JSX.Element
  dialogTitle: string
  children: ReactNode
}

export const Modal: FC<ModalProps> = props => {
  const { dialogTitle, dialogContent, children, ...rest } = props
  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const closeButtonRef = useRef(null)

  return (
    <>
      <div className="fixed left-1 z-10 top-1/4">
        <button
          type="button"
          onClick={openModal}
          className="bg-slate-700 w-auto h-auto rounded-r-md pr-2 pl-3 pt-2 pb-0 -ml-1 text-slate-200"
        >
          <span className="inline-flex headings-center">
            <Help className="w-8 h-8 px-2 mt-2 text-slate-200" />
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
          <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen text-slate-200" aria-hidden="true">
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
                <Dialog.Panel className="relative inline-block align-bottom bg-slate-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-slate-900 text-slate-200 px-4 py-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="float-none mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-400 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationIcon className="h-6 w-6 text-purple-700" aria-hidden="true" />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                        <div>
                          <Dialog.Title
                            key={dialogTitle}
                            as="h3"
                            className="text-lg leading-6 font-medium text-slate-200"
                          >
                            {dialogTitle}
                          </Dialog.Title>
                        </div>
                        <div className="mt-2">
                          <p key={dialogContent} className="text-sm mt-4 text-slate-200">
                            {dialogContent}
                          </p>
                        </div>
                      </div>
                      <WavyHr />
                    </div>
                  </div>
                  <div className="mt-2 py-2 leading-6 mx-4">{children}</div>
                  <div className="mt-4 py-4">
                    <button
                      ref={closeButtonRef}
                      type="button"
                      className="float-right rounded-md border border-transparent bg-red-600 px-4 py-2 mb-4 mr-4 text-sm font-medium text-slate-200 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
