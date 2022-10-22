import * as React from 'react'
import type { GatsbySSR } from 'gatsby'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'
import { Partytown } from '@builder.io/partytown/react'

const ORIGIN = 'https://www.googletagmanager.com'
const GATSBY_GA_MEASUREMENT_ID = 'G-LGV204F0PT'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <AnimatePresence wait>{element}</AnimatePresence>
}

export const wrapRootElement = wrap

export function onRenderBody({ setHeadComponents, setHtmlAttributes }) {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null
  setHtmlAttributes({ lang: 'en' })
  setHeadComponents([
    <Partytown key="partytown" forward={['gtag']} />,
    <script key="google-analytics" type="text/partytown" src={`${ORIGIN}/gtag/js?id=${GATSBY_GA_MEASUREMENT_ID}`} />,
    <script
      key="google-analytics-config"
      type="text/partytown" /* You can add other external scripts below, adding this type to all */
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GATSBY_GA_MEASUREMENT_ID}', { send_page_view: false })`,
      }}
    />,
  ])
}
