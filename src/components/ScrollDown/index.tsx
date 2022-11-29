import * as React from 'react'
import { useState, useEffect } from 'react'
import { ArrowCircleDownIcon } from '@heroicons/react/outline'

const ScrollDown = ({ direction = 'down', by, to, showBelow, className, size = '1.3em' }) => {
  if (!['up', 'down'].includes(direction))
    throw TypeError("Scroll component's direction prop must be either 'up' or 'down'")
  if (to && (typeof to !== 'number' || to <= 0)) throw TypeError("Scroll component's to prop must be a positive number")
  if (by && typeof by !== 'number') throw TypeError("Scroll component's by prop must be a number")

  const [show, setShow] = useState(showBelow ? false : true)

  const scroll = ({ mode, to }) => window['scroll' + mode]({ top: to, behavior: 'smooth' })

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    if (to) scroll({ mode: 'To', to: to * window.innerHeight })
    else if (by) scroll({ mode: 'By', to: by * window.innerHeight })
    else if (direction === 'up') scroll({ mode: 'To', to: 0 })
    else scroll({ mode: 'To', to: document.body.scrollHeight })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  })

  const arrowProps = { show, direction, className, size }
  return <ArrowCircleDownIcon className="arrow-down" onClick={handleClick} {...arrowProps} />
}

export default ScrollDown
