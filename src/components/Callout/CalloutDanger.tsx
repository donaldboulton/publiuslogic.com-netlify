import * as React from 'react'
import { ReactNode } from 'react'
import * as CSS from 'csstype'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface CalloutDangerProps {
  children: ReactNode
}

export const callOutDangerWrapper: CSS.Properties = {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-20px',
  borderRadius: '50%',
  padding: '6px',
  color: '#dc2626',
  border: '6px solid transparent',
  background: '#0d1014',
}

const calloutDanger: CSS.Properties = {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '10px 25px',
  marginBottom: '2.25rem',
  marginTop: '2.25rem',
  borderRadius: '12px',
  fontSize: '1.25em',
  color: '#fff',
  border: '2px solid #dc2626',
  background: 'rgb(55, 65, 81, 0.5)',
  boxShadow: '6px 5px 5px #dc2626',
}

export default function CalloutDanger({ children, ...rest }: CalloutDangerProps) {
  const [ref7, isVisible7] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants7 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        className="opacity-75"
        ref={ref7}
        animate={isVisible7 ? 'visible' : 'hidden'}
        variants={variants7}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={calloutDanger}
        {...rest}
      >
        <aside style={callOutDangerWrapper}>
          <BellAlertIcon className="h-6 w-6 text-red-600" />
        </aside>
        {children}
      </m.div>
    </LazyMotion>
  )
}
