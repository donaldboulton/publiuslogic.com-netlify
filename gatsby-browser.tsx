import * as React from 'react'
import './src/styles/global.css'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

const onClientEntry = () => {
  console.log('LogRocket started!')
  LogRocket.init('mcjbg9/publiuslogic')
  setupLogRocketReact(LogRocket)
}

export function wrapPageElement({ element }) {
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
