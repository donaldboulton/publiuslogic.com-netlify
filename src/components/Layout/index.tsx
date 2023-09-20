import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import { CookieConsent } from 'react-cookie-consent'
import ScrollIndicator from '@/components/ScrollIndicator'
import Stars from '@/components/Stars'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ScrollIndicator />
      <Stars />
      <Header />
      <div className="mx-auto text-slate-900 dark:text-slate-200">
        <main>{children}</main>
      </div>
      <Footer />
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        ariaAcceptLabel="Accept Cookies"
        ariaDeclineLabel="Decline Cookies"
        cookieName="gtm"
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
          <div className="sm:text-center flex">
            <div className="text-scale-900 text-xs sm:mx-auto sm:max-w-sm">
              By continuing, you agree to PubliusLogic{' '}
              <Link className="hover:text-scale-1100 underline" to="/blog/terms">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link className="hover:text-scale-1100 underline" to="/blog/privacy">
                Privacy Policy
              </Link>
              , and to receive periodic emails with updates.
            </div>
          </div>
        </span>
      </CookieConsent>
    </>
  )
}

export default Layout
