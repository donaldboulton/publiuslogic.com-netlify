import * as React from 'react'
import { ReactNode, FC } from 'react'
import * as CSS from 'csstype'
import Alert from '@/components/icons/alert'
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
  background: '#1e293b',
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

const CalloutDanger: FC<CalloutDangerProps> = props => {
  const { children, ...rest } = props
  const item = {
    initial: { y: 20, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
    },
  }

  const useAnimateOnInView = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
      if (!inView) {
        controls.start('hidden')
      }
    }, [controls, inView])

    return { ref }
  }
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
          <Alert className="text-red-600 w-6 h-6" />
        </aside>
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default CalloutDanger
