import * as React from 'react'
import { FC, ReactNode } from 'react'
import * as CSS from 'csstype'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.6,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

interface ListItemProps {
  children: ReactNode
}

const listItem: CSS.Properties = {
  listStyle: 'none',
  marginRight: '8px',
  display: 'flex',
  marginBottom: 'calc(1.45rem / 2)',
  lineHeight: '1.9',
  letterSpacing: '0.3px',

  'span[dataListItem]': {
    paddingRight: '8px',
    transform: 'translateY(4px)',
  },

  '& > ol': {
    marginLeft: '1.45rem',
    marginBottom: 'calc(1.45rem / 2)',
    marginTop: 'calc(1.45rem / 2)',
  },

  '& > ul': {
    marginLeft: '1rem',
    marginBottom: 'calc(1rem / 2)',
    marginTop: 'calc(1rem / 2)',
  },

  '& > p': {
    marginBottom: 'calc(0.45rem / 2)',
  },
}

const ListItem: FC<ListItemProps> = props => {
  const { children, ...rest } = props

  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.ul className="list-unstyled" variants={container} initial="hidden" animate="visible">
          <m.li style={listItem} variants={item} {...rest}>
            <span dataListItem>
              <svg
                className="w-6 h-6 mr-2 ml-1 inline-block items-center text-indigo-400"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                {...props}
              >
                <path d="M5 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M14.0829 6.42532L19 12L14.0829 17.5747"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <m.div>{children}</m.div>
          </m.li>
        </m.ul>
      </LazyMotion>
    </>
  )
}

ListItem.displayName = 'ListItem'

export default ListItem
