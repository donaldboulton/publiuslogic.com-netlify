import * as React from 'react'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'
import { LoginIcon, LogoutIcon } from '@heroicons/react/outline'
import WavyHr from '@/components/WavyHr'

const Login = () => {
  const { isSignedIn, googleUser, signIn, signOut } = useGoogleAuth()

  return (
    <>
      <section className="my-4 flex flex-shrink-0 items-center pr-2">
        <button
          className="block rounded-md bg-slate-700 px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300"
          onClick={() => signIn()}
        >
          <span className="flex flex-shrink-0 items-center pr-2 text-lg">
            <LoginIcon className="block h-9 w-9 pr-2 text-red-500" aria-hidden="true" />
            <span>Login</span>
          </span>
        </button>
        <span className="ml-4">
          {isSignedIn && (
            <button
              className="block rounded-md bg-slate-700 px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300"
              onClick={signOut}
            >
              <span className="flex flex-shrink-0 items-center text-lg">
                <span>Logout</span>
                <LogoutIcon className="block h-9 w-9 pl-2 text-red-500" aria-hidden="true" />
              </span>
            </button>
          )}
        </span>
      </section>
      <WavyHr />
      <section className="my-8 flex flex-shrink-0 items-center">
        {isSignedIn && (
          <div>
            <div className="mb-4 mt-4">
              <h3>Sign In / Out, "Anything Associated with your Google Account".</h3>
              <p>A Complete Backend with no Gatsby routing, just components as variations in views.</p>
            </div>
            <div className="mt-10 sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <img
                  className="bio-avatar mb-4 ring ring-purple-500 ring-offset-4"
                  src={googleUser.profileObj.imageUrl}
                  alt="Avatar"
                />
              </div>
              <div className="-mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <div className="text-base leading-6">
                  <h3>{googleUser.profileObj.name}</h3>
                  <p>{googleUser.profileObj.email}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Login
