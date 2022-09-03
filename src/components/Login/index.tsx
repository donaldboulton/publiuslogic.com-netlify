import * as React from 'react'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'
import { LoginIcon, LogoutIcon } from '@heroicons/react/outline'

const Login = () => {
  const { isSignedIn, googleUser, signIn, signOut } = useGoogleAuth()
  return (
    <>
      <div className="flex items-center flex-shrink-0 text-lg pr-2">
        <button
          className="bg-slate-700 block px-3 py-2 rounded-md text-lg font-medium items-center justify-center hover:bg-slate-600/30 hover:text-white"
          onClick={() => signIn()}
        >
          <span className="flex items-center flex-shrink-0 text-lg pr-2">
            <LoginIcon className="block h-9 w-9 pr-2 text-red-500" aria-hidden="true" />
            <span>Login</span>
          </span>
        </button>
        <span className="ml-4">
          <button
            className="bg-slate-700 block px-3 py-2 rounded-md text-lg font-medium items-center justify-center hover:bg-slate-600/30 hover:text-white"
            onClick={signOut}
          >
            <span className="flex items-center flex-shrink-0 text-lg">
              <span>Logout</span>
              <LogoutIcon className="block h-9 w-9 pl-2 text-red-500" aria-hidden="true" />
            </span>
          </button>
        </span>
      </div>
      <div className="flex items-center flex-shrink-0">
        {isSignedIn && (
          <div>
            <div className="mb-4 mt-4">
              <h3>Sign In / Out, "Anything Associated with your Google Account".</h3>
              <p>A Complete Backend with no Gatsby routing, just components as variations in views.</p>
            </div>
            <div className="sm:flex sm:items-start mt-10">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <img
                  className="bio-avatar mb-4 ring ring-purple-500 ring-offset-4"
                  src={googleUser.profileObj.imageUrl}
                  alt="Avatar"
                />
              </div>
              <div className="-mt-1 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="text-base leading-6">
                  <h3>{googleUser.profileObj.name}</h3>
                  <p>{googleUser.profileObj.email}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Login
