import * as React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

function Subscriptions() {
  const handleSubmit = event => {
    event.preventDefault()
    console.log('Submit')
  }
  return (
    <>
      <div className="mx-auto flex items-center space-x-2 p-2">
        <NetlifyForm
          method="POST"
          name="subscriptions"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          onSuccess={(response, context) => {
            console.log('Successfully sent form data to Netlify Server')
            context.formRef.current.reset()
          }}
        >
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              {success && <p className="text-rose-500">Thanks for Subscribing!</p>}
              {error && <p className="text-rose-500">Sorry, we could not reach our servers.</p>}
              <p className="hidden">
                <label>
                  Don not fill this out if you are human: <input name="bot-field" />
                </label>
              </p>
              <div className="mx-auto space-x-1 overflow-hidden p-1">
                <span className="group relative flex items-center text-slate-200">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path>
                  </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-48 appearance-none rounded border-slate-800 bg-slate-300 p-2.5 py-3 px-4 pl-14 leading-tight text-slate-900 focus:border-fuchsia-500 focus:outline-none focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-200"
                    aria-label="Enter Email"
                  />
                  <span className="block space-x-2">
                    <button
                      aria-label="Submit Button"
                      className="ml-2 rounded-md border border-transparent bg-gray-800 p-2 text-sm font-medium text-slate-200 shadow-lg hover:bg-gray-900 hover:shadow-slate-800/50"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </span>
                  <div className="block flex items-center">
                    <input
                      id="accept"
                      type="checkbox"
                      className="ml-2 h-6 w-6 rounded border-fuchsia-700 bg-slate-700 ring-offset-fuchsia-800 focus:ring-2 focus:ring-fuchsia-600"
                      name="accept"
                      aria-label="Terms Checkbox"
                      required
                    />
                  </div>
                </span>
              </div>
            </>
          )}
        </NetlifyForm>
      </div>
    </>
  )
}

export default Subscriptions
