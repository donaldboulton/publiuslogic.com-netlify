import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import { CookieConsent } from 'react-cookie-consent'
import { SuspenseHelper } from '@/components/SuspenseHelper'
import Stars from '@/components/Stars'

const Header = React.lazy(() => import('@/components/Header'))
const Footer = React.lazy(() => import('@/components/Footer'))
const ToTop = React.lazy(() => import('@/components/ToTop'))
const ToBottom = React.lazy(() => import('@/components/ToBottom'))
const ScrollIndicator = React.lazy(() => import('@/components/ScrollIndicator'))

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Stars />
            <SuspenseHelper fallback={<div>Loading...</div>}>
                <ScrollIndicator />
            </SuspenseHelper>
            <SuspenseHelper fallback={<div>Loading...</div>}>
                <Header />
            </SuspenseHelper>
            {children}
            <SuspenseHelper fallback={<div>Loading...</div>}>
                <ToBottom />
            </SuspenseHelper>
            <SuspenseHelper fallback={<div>Loading...</div>}>
                <ToTop />
            </SuspenseHelper>
            <SuspenseHelper fallback={<div>Loading...</div>}>
                <Footer />
            </SuspenseHelper>
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
                    background:
                        'linear-gradient(to right, #4338ca, transparent, #4338ca)',
                    textShadow: '2px 2px black',
                }}
                buttonStyle={{
                    background:
                        'radial-gradient(circle at top right, #4338ca, transparent)',
                    color: 'white',
                    fontWeight: 'bolder',
                    borderRadius: '3px',
                    border: '1px black',
                    textShadow: '2px 2px black',
                }}
            >
                PubliusLogic uses cookies for user experience.{' '}
                <span className="ml-5 items-center text-center text-lg">
                    <div className="sm:text-center">
                        <div className="text-scale-900 text-xs sm:mx-auto sm:max-w-sm">
                            By continuing, you agree to PubliusLogic{' '}
                            <Link
                                className="hover:text-scale-1100 underline"
                                to="/blog/terms"
                            >
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                                className="hover:text-scale-1100 underline"
                                to="/blog/privacy"
                            >
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
