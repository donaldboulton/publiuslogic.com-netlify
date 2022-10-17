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
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-slate-200 group-focus-within:text-fuchsia-600"
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-40 rounded-md bg-slate-800 py-2 pl-10 text-sm leading-6 text-slate-200 placeholder-slate-100 shadow-sm ring-1 ring-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    aria-label="Enter Email"
                  />
                  <span className="block space-x-2">
                    <button
                      aria-label="Submit Button"
                      className="ml-2 rounded-md border border-transparent bg-fuchsia-700 p-2 text-sm font-medium text-slate-200 shadow-lg shadow-fuchsia-700/50 hover:bg-fuchsia-600"
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
