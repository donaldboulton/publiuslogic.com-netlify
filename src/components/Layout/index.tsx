import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import { CookieConsent } from 'react-cookie-consent'
import { MDXProvider } from '@mdx-js/react'
import FindOutMore from '@/components/FindOutMore'
import Features from '@/components/Features'
import Cta from '@/components/CTA'
import Callout from '@/components/Callout'
import CalloutDanger from '@/components/Callout/CalloutDanger'
import CalloutLabel from '@/components/Callout/CalloutLabel'
import WavyHr from '@/components/WavyHr'
import A from '@/components/A'
import Center from '@/components/Center'
import CenterItem from '@/components/CenterItem'
import List from '@/components/List'
import ListItem from '@/components/List/ListItem'
import ListGrid from '@/components/ListGrid'
import Tooltip from '@/components/Tooltip'
import VideoOne from '@/components/CloudinaryVideo/videoOne'
import VideoTwo from '@/components/CloudinaryVideo/videoTwo'
import CloudinaryVideo from '@/components/CloudinaryVideo'
import Accordion from '@/components/Accordion'
import Table from '@/components/Table'
import Modal from '@/components/Modal'

interface LayoutProps {
  children: ReactNode
}

const shortcodes = {
  A,
  FindOutMore,
  Center,
  CenterItem,
  Cta,
  Features,
  WavyHr,
  Callout,
  CalloutDanger,
  CalloutLabel,
  List,
  ListItem,
  ListGrid,
  Tooltip,
  CloudinaryVideo,
  VideoTwo,
  VideoOne,
  Accordion,
  Table,
  Modal,
}

const Layout = ({ children, path }: LayoutProps) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto text-slate-900 dark:text-slate-200 antialiased">
        <main>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </main>
      </div>
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        ariaAcceptLabel="Accept Cookies"
        ariaDeclineLabel="Decline Cookies"
        cookieName="gatsby-gdpr-google-analytics"
        style={{
          background: 'linear-gradient(to right, #4338ca, transparent, #4338ca)',
          textShadow: '2px 2px black',
        }}
        buttonStyle={{
          background: 'radial-gradient(circle at top right, #4338ca, transparent)',
          color: 'white',
          fontWeight: 'bolder',
          borderRadius: '3px',
          border: '1px black',
          textShadow: '2px 2px black',
        }}
      >
        PubliusLogic uses cookies for user experience.{' '}
        <span
          style={{
            fontSize: '14px',
            textAlign: 'center',
            marginLeft: '20px',
          }}
        >
          <Link to="/blog/privacy" className="text-gray-200" alt="Privacy Page">
            Privacy Page
          </Link>
        </span>
      </CookieConsent>
    </>
  )
}

export default Layout
