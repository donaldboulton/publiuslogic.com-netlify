import * as React from 'react'
import { ReactNode, FC } from 'react'
import * as CSS from 'csstype'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface CalloutLabelProps {
  children: ReactNode
  label: string
}

export const calloutLabelWrapper: CSS.Properties = {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-8px',
  borderRadius: '6px',
  paddingRight: '8px',
  paddingLeft: '8px',
  color: '#fff',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  userSelect: 'none',
  background: 'rgb(147, 51, 234, 0.5)',
}

const calloutLabel: CSS.Properties = {
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
  border: '2px solid rgb(147, 51, 234, 0.5)',
  background: 'rgb(55, 65, 81, 0.5)',
  boxShadow: '6px 5px 5px rgb(147, 51, 234, 0.75)',
  opacity: '0.6',
}

const CalloutLabel: FC<CalloutLabelProps> = props => {
  const { children, label, ...rest } = props
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
  const [ref8, isVisible8] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants8 = {
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
        ref={ref8}
        animate={isVisible8 ? 'visible' : 'hidden'}
        variants={variants8}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={calloutLabel}
        {...rest}
      >
        <aside style={calloutLabelWrapper} className="bg-purple-600 px-2 opacity-75">
          {label}
        </aside>
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default CalloutLabel
