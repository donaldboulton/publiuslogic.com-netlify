import * as React from 'react'
import { ReactNode, FC } from 'react'
import { NetlifyForm, Honeypot, Recaptcha } from 'react-netlify-forms'
import { ReCAPTCHAProps } from 'react-google-recaptcha'

interface ContactFormProps {
  name: string
  action?: string | undefined
  honeypotName?: string | undefined
  recaptcha?: ReCAPTCHAProps | undefined
  children: ReactNode
}

const ContactForm: FC<ContactFormProps> = props => {
  const { name, action, honeypotName, recaptcha, children } = props
  const SITE_RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY
  return (
    <div className="mt-5 lg:mt-0 lg:col-span-2 mb-24 rounded-lg bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <NetlifyForm
        method="POST"
        name="contact"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        formProps={{ id: 'contact' }}
        enableRecaptcha
        onSuccess={(response, context) => {
          console.log('Successfully sent form data to Netlify Server')
          context.formRef.current.reset()
        }}
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            <Recaptcha siteKey={SITE_RECAPTCHA_KEY} theme="dark" invisible />
            <p className="hidden">
              <label>
                Don not fill this out if you are human: <input name="bot-field" />
              </label>
            </p>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 text-black dark:text-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      required
                      placeholder="Enter your Name here."
                      className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      required
                      placeholder="Enter your Email here."
                      className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md peer ..."
                      onChange={handleChange}
                    />
                    <p class="invisible peer-invalid:visible text-pink-600 text-sm">
                      Please provide a valid email address.
                    </p>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-white">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      required
                      placeholder="Enter Phone Number here."
                      className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      autoComplete="on"
                      required
                      placeholder="Enter your Subject here."
                      className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="text" className="block text-sm font-medium text-black dark:text-white">
                      Message
                    </label>
                    <textarea
                      className="mt-1 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md caret-blue-500 focus:caret-indigo-500"
                      rows={5}
                      name="text"
                      required
                      placeholder="Enter your message here."
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-left sm:px-6 bg-slate-300 dark:bg-slate-900">
                {success && <p className="text-rose-500">Will get back to you A.S.A.P!</p>}
                {error && <p className="text-rose-500">Sorry, we could not reach our servers.</p>}
                <button
                  type="submit"
                  className="inline-flex justify-center mr-2 py-2 px-4 text-white rounded-md transition ease-in-out delay-150 bg-fuchsia-500 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 shadow-lg hover:shadow-fuchsia-700/50 duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        )}
      </NetlifyForm>
    </div>
  )
}

export default ContactForm
