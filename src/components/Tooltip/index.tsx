import * as React from 'react'
import { ReactNode, useEffect, useState, useRef, useCallback, FC, RefObject } from 'react'
import * as CSS from 'csstype'
import VisuallyHidden from '../VisuallyHidden'
import { LazyMotion, m, useAnimation } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface TooltipProps {
  children: ReactNode
  id: string
  className: string
  tooltipText: string
  tooltipVisuallyHiddenText?: string
}

const wrapper: CSS.Properties = {
  position: 'relative',
}

const tooltip: CSS.Properties = {
  color: '#fff',
  background: '#374151',
  boxShadow: '#222',
  borderRadius: '5px',
  position: 'absolute',
  bottom: '-90%',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  display: 'flex',
  padding: '4px 10px',
  zIndex: 5,
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  userSelect: 'none',
  overflowX: 'hidden',
}

const Tooltip: FC<TooltipProps> = props => {
  const { children, id, className, tooltipText, tooltipVisuallyHiddenText } = props
  const [dimensions, setDimensions] = useState({
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  })

  const controls = useAnimation()

  const tooltipRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handlePosition = useCallback(
    (tooltipRef: RefObject<HTMLSpanElement>) => {
      const { current } = tooltipRef!

      if (current) {
        const tooltipRect = current.getBoundingClientRect()
        if (tooltipRect.left < 0) {
          current.style.left = '0'
          current.style.right = 'auto'
          current.style.transform = `translateX(${-tooltipRect.x - 10}px)`
        } else if (tooltipRect.right > dimensions.width) {
          current.style.left = 'auto'
          current.style.right = '0'
          current.style.transform = `translateX(${dimensions.width - tooltipRect.right + 10}px)`
        }
      }
    },
    [dimensions]
  )

  const resetPosition = (tooltipRef: RefObject<HTMLSpanElement>) => {
    const { current } = tooltipRef!

    if (current) {
      current.style.removeProperty('left')
      current.style.removeProperty('right')
      current.style.removeProperty('transform')
    }
  }

  const showTooltip = () => {
    if (tooltipRef.current) {
      tooltipRef.current.setAttribute('aria-hidden', 'false')
      controls.start('hover')
      handlePosition(tooltipRef)
    }
  }

  function hideTooltip() {
    if (tooltipRef.current) {
      tooltipRef.current.setAttribute('aria-hidden', 'true')
      controls.start('idle')
      resetPosition(tooltipRef)
    }
  }

  const tipVariants = {
    hover: {
      scale: 1,
      y: 6,
      opacity: 1,
    },
    idle: {
      scale: 0.95,
      y: 10,
      opacity: 0,
    },
  }

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        style={wrapper}
        className={className}
        initial="idle"
        animate={controls}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        onKeyDown={event => {
          if (event.which === 27) {
            event.preventDefault()
            hideTooltip()
            return false
          }
        }}
      >
        {children}
        <m.span
          id={id}
          style={tooltip}
          className={className}
          aria-hidden={true}
          ref={tooltipRef}
          variants={tipVariants}
          transition={{
            delay: 0.15,
          }}
          role="tooltip"
        >
          {tooltipText}
          {tooltipVisuallyHiddenText ? <VisuallyHidden as="p">{tooltipVisuallyHiddenText}</VisuallyHidden> : null}
        </m.span>
      </m.div>
    </LazyMotion>
  )
}

export default Tooltip
