import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'

function Input(props) {
  // https://stackoverflow.com/questions/68708009/how-to-disable-submit-input-field-until-all-required-fields-and-checkboxes-are-e
  const [invalid, setInvalid] = useState(false)

  const handleInvalid = event => {
    event.preventDefault()
    console.log('Invalid')
    setInvalid(true)
  }

  const handleChange = () => setInvalid(false)

  const className = invalid ? 'invalid' : ''

  return (
    <div className={className}>
      <input {...props} onInvalid={handleInvalid} onChange={handleChange} />
      {props.type === 'checkbox' && <label htmlFor={props.id}>{props.label}</label>}
    </div>
  )
}

function Subscriptions() {
  return (
    <div className="p-2 mx-auto flex items-center space-x-2">
      <form action="https://getform.io/f/51db0709-9758-4644-b637-4f9a8aba997a" method="POST" name="subscriptions">
        <div className="p-1 mx-auto overflow-hidden space-x-1">
          <span className="group relative flex items-center text-slate-200">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-200 pointer-events-none group-focus-within:text-fuchsia-600"
              aria-hidden="true"
              viewBox="0 0 512 512"
            >
              <path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path>
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="focus:ring-2 focus:ring-fuchsia-500 focus:outline-none w-40 text-sm leading-6 bg-slate-800 text-slate-200 placeholder-slate-100 rounded-md py-2 pl-10 ring-1 ring-fuchsia-600 shadow-sm"
              aria-label="Enter Email"
            />
            <span className="block space-x-2">
              <button
                type="button"
                aria-label="Submit Button"
                className="p-2 ml-2 border border-transparent text-sm font-medium rounded-md text-slate-200 bg-fuchsia-500 hover:bg-fuchsia-700 shadow-lg shadow-fuchsia-700/50"
                type="submit"
              >
                Subscribe
              </button>
            </span>
            <div className="block flex items-center">
              <input
                id="accept"
                type="checkbox"
                className="ml-2 w-6 h-6 bg-slate-700 rounded border-fuchsia-700 focus:ring-fuchsia-600 ring-offset-fuchsia-800 focus:ring-2"
                name="accept"
                aria-label="Terms Checkbox"
                id="accept"
                required
              />
            </div>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Subscriptions
