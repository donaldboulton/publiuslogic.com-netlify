import * as React from 'react'
import { useState } from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { wrapRootElement as wrap } from './wrap-root-element'
import { MDXEmbedProvider } from 'mdx-embed'
import { AnimatePresence } from 'framer-motion'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from './src/lib/supabase'
import './src/styles/global.css'
import '@fontsource/eb-garamond'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return
  <MDXEmbedProvider>
    <SessionContextProvider supabaseClient={supabase}>
      <AnimatePresence wait>{element}</AnimatePresence>
    </SessionContextProvider>
  </MDXEmbedProvider>
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`This application has been updated. ` + `Reload to display the latest version?`)

  if (answer === true) {
    window.location.reload()
  }
}

export const wrapRootElement = wrap

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

localStorage.theme = 'light'

localStorage.theme = 'dark'

localStorage.removeItem('theme')
