import * as React from 'react'
import { useState } from 'react'
import type { GatsbySSR } from 'gatsby'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'
import { MDXEmbedProvider } from 'mdx-embed'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from './src/lib/supabase'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return
  ;<MDXEmbedProvider>
    <SessionContextProvider supabaseClient={supabase}>
      <AnimatePresence wait>{element}</AnimatePresence>
    </SessionContextProvider>
  </MDXEmbedProvider>
}

export const wrapRootElement = wrap

export function onRenderBody({ setPreBodyComponents, setHtmlAttributes }) {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null
  setHtmlAttributes({ lang: 'en' })
  setPreBodyComponents([
    React.createElement('script', {
      key: 'class',
      dangerouslySetInnerHTML: {
        __html: `
void function() {
  window.__onThemeChange = function() {}
  var preferredTheme
  try {
    preferredTheme = localStorage.getItem('theme')
  } catch (err) { }
  function setTheme(newTheme) {
    if (preferredTheme && document.documentElement.classList.contains(preferredTheme)) {
      document.documentElement.classList.replace(preferredTheme, newTheme)
    } else {
      document.documentElement.classList.add(newTheme)
    }
    window.__theme = newTheme
    preferredTheme = newTheme
    window.__onThemeChange(newTheme)
  }
  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (err) {}
  }
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  darkQuery.addListener(function(e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light')
  })
  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
}()
    `,
      },
    }),
  ])
}
