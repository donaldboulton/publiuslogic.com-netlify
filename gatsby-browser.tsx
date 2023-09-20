import * as React from 'react'
import '@fontsource/sacramento'
import '@fontsource/inter'
import './src/styles/global.css'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'

export function wrapPageElement({ element }) {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <AnimatePresence onExitComplete={onExitComplete} mode="wait" initial={false}>
      {element}
    </AnimatePresence>
  )
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

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
