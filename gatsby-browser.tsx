import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'
import './src/styles/global.css'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <AnimatePresence wait>{element}</AnimatePresence>
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
