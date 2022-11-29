import * as React from 'react'
import { useEffect } from 'react'
import qs from 'query-string'

export default function AuthRedirect({ location }) {
  // Get the code set as the token in the query params from googleAccessToken function.
  const query = qs.parse(location?.search)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('google:tokens', query.token)
    }

    // After setting token in localStorage, go to app homepage.
    setTimeout(() => {
      window.location.assign('/login')
    }, 1000)
  })

  return <p className="text-slate-200">Saving Google token info to local storage...</p>
}
