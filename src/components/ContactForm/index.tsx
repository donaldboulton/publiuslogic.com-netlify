import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ReactNode, FC } from 'react'
import { ReCAPTCHAProps } from 'react-google-recaptcha'
import { useNetlifyForm, NetlifyFormProvider, NetlifyFormComponent, Honeypot, Recaptcha } from 'react-netlify-forms'
import { useForm, Resolver } from 'react-hook-form'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  userName: string
  subject: string
  message: string
  acceptTerms: boolean
}

const resolver: Resolver<FormValues> = async values => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  }
}

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver })
  const netlify = useNetlifyForm({
    name: 'contact',
    action: '/thanks',
    onSuccess: (response, context) => {
      console.log('Successfully sent form data to Netlify Server')
    },
  })
  const onSubmit = data => netlify.handleSubmit(null, data)

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  const PHONE_REGEX = /^[0-9+-]+$/

  return (
    <div className="mt-5 lg:mt-0 lg:col-span-2 mb-24 rounded-lg bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <NetlifyFormProvider {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
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
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pr-3 pointer-events-none text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <input
                        className="pl-14 p-2.5 appearance-none block w-full bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-slate-500 border-slate-800 focus:border-fuchsia-500"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        {...register('firstName', { required: true, maxLength: 80 })}
                      />
                    </div>
                    {errors?.firstName && <p>{errors.firstName.message}</p>}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-700 text-xs font-bold mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pr-3 pointer-events-none text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <input
                        className="appearance-none block pl-14 p-2.5 w-full bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-slate-500 border-slate-800 focus:border-fuchsia-500"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        {...register('lastName', { required: true, pattern: /^[a-zA-Z]+$/, maxLength: 100 })}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="userName"
                      className="block uppercase tracking-wide bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-700 text-xs font-bold mb-2"
                    >
                      User Name
                    </label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pr-3 pointer-events-none text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        autoComplete="off"
                        placeholder="User Name"
                        className="mt-1 pl-14 p-2.5 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-700 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md py-3 px-4 leading-tight"
                        {...register('userName', { required: true, pattern: /^[a-zA-Z]+$/, maxLength: 100 })}
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="email"
                      className="block uppercase tracking-wide bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-700 text-xs font-bold mb-2"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pr-3 pointer-events-none text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="on"
                        placeholder="Email"
                        className="mt-1 pl-14 p-2.5 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md py-3 px-4 leading-tight"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: EMAIL_REGEX,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                    </div>
                    {errors.email && <div className="text-red-500">{errors.email.message}</div>}
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="phone"
                      className="block uppercase tracking-wide bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-700 text-xs font-bold mb-2"
                    >
                      Phone
                    </label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pr-3 pointer-events-none text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="on"
                        placeholder="Phone Number"
                        className="mt-1 pl-14 p-2.5 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md py-3 px-4 leading-tight"
                        {...register('phone', {
                          required: 'Phone Number is required',
                          pattern: {
                            value: PHONE_REGEX,
                            message: 'Invalid Phone Number',
                          },
                          minLength: 6,
                          maxLength: 12,
                        })}
                      />
                    </div>
                    {errors.phone && <div className="text-red-500">{errors.phone.message}</div>}
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="subject"
                      className="block uppercase tracking-wide bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-700 text-xs font-bold mb-2"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pr-3 pointer-events-none text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="mt-1 pl-14 p-2.5 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md py-3 px-4 leading-tight"
                        {...register('subject', { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="text"
                      className="block uppercase tracking-wide bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-700 text-xs font-bold mb-2"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pr-3 pointer-events-none text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        className="mt-1 pl-14 p-2.5 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-slate-800 rounded-md caret-blue-500 focus:caret-indigo-500"
                        rows={5}
                        name="text"
                        {...register('message', { required: true })}
                      />
                    </div>
                    <p className="ml-12 text-red-500 text-xs italic">Message Is Required.</p>
                  </div>
                </div>
              </div>
              {netlify.success && <p className="text-yellow-500 ml-6 mt-6 container">Thanks for contacting us!</p>}
              {netlify.error && (
                <p className="text-red-500 ml-6 mt-6 container">
                  Sorry, we could not reach servers. Because it only works on Netlify, our GitHub demo does not provide
                  a response.
                </p>
              )}
              <div className="px-4 py-3 inline-flex sm:px-6">
              <div className="p-1 mx-auto overflow-hidden space-x-1">
                <span className="group relative flex items-center text-slate-200">
                  <button
                    type="submit"
                    className="py-2 px-4 text-slate-200 rounded-md bg-gray-800 hover:bg-gray-900 shadow-lg hover:shadow-slate-800/50"
                  >
                    Send
                  </button>
                  <button
                    type="reset"
                    className="ml-2 py-2 px-4 text-slate-200 rounded-md bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-red-700/50"
                  >
                    Reset
                  </button>
                  <div className="ml-2 block flex items-center">
                    <input
                      id="acceptTerms"
                      type="checkbox"
                      name="acceptTerms"
                      aria-label="Terms Checkbox"
                      {...register('acceptTerms')}
                      className={`ml-1 w-6 h-6 bg-slate-700 rounded border-red-700 focus:ring-red-600 ring-offset-red-800 focus:ring-2 ${
                        errors.acceptTerms ? 'is-invalid' : ''
                      }`}
                    />                   
                    <label
                      htmlFor="acceptTerms"
                      className="ml-3 block uppercase tracking-wide bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-700 text-xs font-bold"
                    > 
                    <Link
                      to="/blog/privacy/"
                      className="inline-flex"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-describedby="hookForm"
                    >
                      Agree to Terms
                      </Link>
                    </label>                    
                    <div className="test-red-500">{errors.acceptTerms?.message}</div>
                  </div>
                </span>
                </div>
              </div>
              <div className="mr-8 mt-4 md:ml-10 float-right">
                <a
                  href="https://react-hook-form.com/"
                  className="inline-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-describedby="hookForm"
                >
                  <StaticImage
                    layout="fixed"
                    formats={['auto', 'webp']}
                    src="../../../static/img/react-hook-form-48.png"
                    width={40}
                    height={40}
                    quality={95}
                    alt="Profile picture"
                    loading="eager"
                  />
                  <span className="ml-1 mt-2 text-slate-900 dark:text-slate-700">React Hook Forms</span>
                </a>
              </div>
            </div>
          </>
        </NetlifyFormComponent>
      </NetlifyFormProvider>
    </div>
  )
}

export default ContactForm
