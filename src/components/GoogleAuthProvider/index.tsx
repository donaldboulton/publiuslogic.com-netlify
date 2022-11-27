"use client"

import * as React from 'react'
import { useContext } from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const createContext = () => {
  const ctx = React.createContext()
  const useCtx = () => {
    const contextValue = useContext(ctx)

    if (contextValue === undefined) throw new Error('useCtx must be inside a Provider with a value')

    return contextValue
  }

  return [useCtx, ctx.Provider]
}
const [useGoogleAuth, AuthProvider] = createContext()

export const GoogleAuthProvider = ({ children }) => {
  const { googleUser, isInitialized, grantOfflineAccess, signOut, isSignedIn, refreshUser } = useGoogleLogin({
    clientId: '146139913792.apps.googleusercontent.com',
  })

  const fetchWithRefresh = async (input, init) => {
    let accessToken = googleUser.accessToken
    const shouldRefreshToken = googleUser.expiresAt - 300 * 1000 - Date.now() <= 0

    if (shouldRefreshToken) {
      const tokenObj = await refreshUser()
      accessToken = tokenObj?.accessToken ?? accessToken
    }

    return fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }

  return (
    <AuthProvider
      value={{
        signIn: grantOfflineAccess,
        isSignedIn,
        isInitialized,
        googleUser,
        signOut,
        fetchWithRefresh,
      }}
    >
      {children}
    </AuthProvider>
  )
}
export { useGoogleAuth }
