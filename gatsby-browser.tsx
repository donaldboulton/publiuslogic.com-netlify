import * as React from 'react'
import '@fontsource/sacramento'
import '@fontsource/inter'
import './src/styles/global.css'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from './src/lib/supabase'

export function wrapPageElement({ element }) {
  return
  <SessionContextProvider supabaseClient={supabase}>
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
  </SessionContextProvider>
}

export const wrapRootElement = wrap

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm('This application has been updated. ' + 'Reload to display the latest version?')

  if (answer === true) {
    window.location.reload()
  }
}

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined
  setTimeout(() => {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', { page_path: pagePath })
    }
  }, 100)
}
