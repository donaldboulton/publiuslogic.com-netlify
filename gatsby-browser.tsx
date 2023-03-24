import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { wrapRootElement as wrap } from './wrap-root-element'
import { MDXEmbedProvider } from 'mdx-embed'
import { AnimatePresence } from 'framer-motion'
import './src/styles/global.css'
import '@fontsource/eb-garamond'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return
  ;<MDXEmbedProvider>
    <AnimatePresence wait>{element}</AnimatePresence>
  </MDXEmbedProvider>
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`This application has been updated. ` + `Reload to display the latest version?`)

  if (answer === true) {
    window.location.reload()
  }
}

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
