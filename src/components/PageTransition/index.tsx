/* https://maxschmitt.me/posts/nextjs-page-transitions-framer-motion */
import * as React from 'react'
import { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
  const onTheRight = { x: '100%' }
  const inTheCenter = { x: 0 }
  const onTheLeft = { x: '-100%' }

  const transition = { duration: 0.6, ease: 'easeInOut' }

  return (
    <motion.div
      className="max-h-max"
      ref={ref}
      initial={onTheRight}
      animate={inTheCenter}
      exit={onTheLeft}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(PageTransition)
