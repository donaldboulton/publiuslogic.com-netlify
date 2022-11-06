import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ReactNode, FC } from 'react'
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
    <div className="-pt-2 mb-24 text-slate-900 dark:text-slate-200 lg:col-span-2 lg:mt-0">
      <NetlifyFormProvider {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)} enableRecaptcha>
          <>
            <Honeypot />
            <Recaptcha siteKey={SITE_RECAPTCHA_KEY} theme="dark" invisible />
            <p className="hidden">
              <label>
                Don not fill this out if you are human: <input name="bot-field" />
              </label>
            </p>

            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="px-4 py-5 text-slate-900 dark-text-slate-200 sm:p-6">
                <div className="-mx-3 mb-6 flex flex-wrap">
                  <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                    <label
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <input
                        className="mb-3 block w-full appearance-none rounded border-slate-300 dark:border-slate-900 bg-slate-300 dark:bg-slate-900 p-2.5 py-3 px-4 pl-14 leading-tight text-slate-900 dark:text-slate-200 focus:border-fuchsia-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        {...register('firstName', { required: true, maxLength: 80 })}
                      />
                    </div>
                    {errors?.firstName && <p>{errors.firstName.message}</p>}
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <label
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <input
                        className="block w-full appearance-none rounded border-slate-300 dark:border-slate-900 bg-slate-300 dark:bg-slate-900 p-2.5 py-3 px-4 pl-14 leading-tight text-slate-900 dark:text-slate-200 focus:border-fuchsia-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
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
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-700"
                    >
                      User Name
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                        className="mt-1 block w-full rounded-md border-slate-800 bg-slate-300 p-2.5 py-3 px-4 pl-14 leading-tight text-slate-900 shadow-sm focus:border-fuchsia-500 focus:ring-slate-500 dark:bg-slate-900 dark:text-slate-700 sm:text-sm"
                        {...register('userName', { required: true, pattern: /^[a-zA-Z]+$/, maxLength: 100 })}
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-700"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                        className="mt-1 block w-full rounded-md border-slate-800 bg-slate-300 p-2.5 py-3 px-4 pl-14 leading-tight text-slate-900 shadow-sm focus:border-fuchsia-500 focus:ring-slate-500 dark:bg-slate-900 dark:text-slate-700 sm:text-sm"
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
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-700"
                    >
                      Phone
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                        className="mt-1 block w-full rounded-md border-slate-800 bg-slate-300 p-2.5 py-3 px-4 pl-14 leading-tight text-slate-900 shadow-sm focus:border-fuchsia-500 focus:ring-slate-500 dark:bg-slate-900 dark:text-slate-700 sm:text-sm"
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
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-700"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                        className="mt-1 block w-full rounded-md border-slate-800 bg-slate-300 p-2.5 py-3 px-4 pl-14 leading-tight text-slate-900 shadow-sm focus:border-fuchsia-500 focus:ring-slate-500 dark:bg-slate-900 dark:text-slate-700 sm:text-sm"
                        {...register('subject', { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="text"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-700"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                        className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-900 bg-slate-300 dark:bg-slate-900 p-2.5 pl-14 caret-blue-500 shadow-sm focus:border-fuchsia-500 focus:caret-indigo-500 focus:ring-slate-500 text-slate-900 dark:text-slate-200 sm:text-sm"
                        rows={5}
                        name="text"
                        {...register('message', { required: true })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {netlify.success && <p className="container ml-6 mt-6 text-yellow-500">Thanks for contacting us!</p>}
              {netlify.error && (
                <p className="container ml-6 mt-6 text-red-500">
                  Sorry, we could not reach servers. Because it only works on Netlify, our GitHub demo does not provide
                  a response.
                </p>
              )}
              <div className="inline-flex px-4 py-3 sm:px-6">
                <div className="mx-auto space-x-1 overflow-hidden p-1">
                  <span className="group relative flex items-center text-slate-200">
                    <button
                      type="submit"
                      className="rounded-md bg-gray-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-gray-900 hover:shadow-slate-800/50"
                    >
                      Send
                    </button>
                    <button
                      type="reset"
                      className="ml-2 rounded-md bg-red-500 py-2 px-4 text-slate-200 shadow-lg hover:bg-red-600 hover:shadow-red-700/50"
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
                        className={`ml-1 h-6 w-6 rounded border-red-700 bg-slate-700 ring-offset-red-800 focus:ring-2 focus:ring-red-600 
                        ${
                          errors.acceptTerms ? 'is-invalid' : ''
                        }`}
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="ml-3 block text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-300"
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
              <div className="float-right mt-4 mr-8">
                <span className="md:ml-10">
                  <a
                    href="https://netlify.com/"
                    className="inline-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="Netlify"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" className="inline-flex">
                      <defs>
                        <radialGradient
                          id="a"
                          cy="0%"
                          r="100.11%"
                          fx="50%"
                          fy="0%"
                          gradientTransform="matrix(0 .9989 -1.152 0 .5 -.5)"
                        >
                          <stop offset="0%" stop-color="#20C6B7" />
                          <stop offset="100%" stop-color="#4D9ABF" />
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M28.589 14.135l-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 0 1-.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 0 1-.033.006h-.015c-.005-.003-.01-.007-.02-.017a1.716 1.716 0 0 0-.495-.381zm5.258-.288l3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 0 0-.015-.006c-.037-.015-.08-.032-.08-.07 0-.038.044-.056.081-.071l.012-.005 3.98-1.684zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 0 0-.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 0 0 1.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801l-7.186 7.186 1.23-7.56.002-.01c.001-.01.003-.02.006-.029.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 0 0 .695-.517c.024-.028.053-.055.09-.06a.09.09 0 0 1 .029 0l5.06 1.04zm-8.707 8.707l-.81.81-8.955-12.942a.424.424 0 0 0-.01-.014c-.014-.019-.029-.038-.026-.06.001-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 0 1 .076.033c.013.013.016.027.019.043a1.757 1.757 0 0 0 1.028 1.175c.028.014.016.045.003.078a.238.238 0 0 0-.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 0 1-1.206 0c-.466-.148-.869-.55-1.674-1.356L8.73 28.73l2.349-3.643c.011-.018.022-.034.04-.047.025-.018.061-.01.091 0a2.434 2.434 0 0 0 1.638-.083c.027-.01.054-.017.075.002a.19.19 0 0 1 .028.032L21.95 38.05zM7.863 27.863L5.8 25.8l4.074-1.738a.084.084 0 0 1 .033-.007c.034 0 .054.034.072.065a2.91 2.91 0 0 0 .13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976l-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 0 0 .03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01-4.337 1.837zM.831 19.892a2 2 0 0 1 .09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 0 0 4.626 6.687c.027.036.057.076.026.106-.146.161-.292.337-.395.528a.16.16 0 0 1-.05.062c-.013.008-.027.005-.042.002H9.78L.831 19.891zm5.68-6.403l4.491-4.491c.422.185 1.958.834 3.332 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 0 0 .523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063c-.012.02-.023.037-.043.05-.024.015-.058.008-.086.001a2.274 2.274 0 0 0-.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 0 1-.045-.051l-4.808-7.013zm5.398-5.398l5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 0 1 1.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 0 1-.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 0 0-1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676l3.818 3.818-.92 5.698v.015a.135.135 0 0 1-.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 0 0-.548.273.154.154 0 0 0-.02.017c-.011.012-.022.023-.04.025a.114.114 0 0 1-.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 0 0-.31-.915c-.028-.046-.059-.094-.035-.141l4.066-6.303zm-3.932 8.606l5.454 2.31c.03.014.063.027.076.058a.106.106 0 0 1 0 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173-.017 0-.035 0-.052-.017-.03-.03 0-.072.027-.11a.76.76 0 0 0 .014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 0 1 .034-.04c.027-.02.067-.01.098.004zm-6.246 9.185l12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025L25.756 23.7l-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 0 0-1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z"
                      />
                    </svg>
                    <span className="ml-1 mt-2 text-slate-900 dark:text-slate-300">Netlify</span>
                  </a>
                </span>
                <span className="ml-2">
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
                    <span className="ml-1 mt-2 text-slate-900 dark:text-slate-300">React Hook Forms</span>
                  </a>
                </span>
              </div>
            </div>
          </>
        </NetlifyFormComponent>
      </NetlifyFormProvider>
    </div>
  )
}

export default ContactForm
