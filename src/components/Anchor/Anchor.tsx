import * as React from 'react'
import { AnchorProps } from './types'
import { getIconString } from './utils'
import * as CSS from 'csstype'

export const StyledAnchor: CSS.Properties = {
  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: '#fff',
  fontWeight: 500,
  wordBreak: 'break-word',
  textDecoration: 'none',
  outline: 'none',
  transition: 'border-color 0.3s ease, color 0.3s ease',

  '--hover-color': 'gray',

  '&:focus': {
    '--color': '#dedede',
    '--hover-translation-distance': 'var(--arrow-translation, 0)',
  },

  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      '--color': '#dedede',
      ' --hover-translation-distance': 'var(--arrow-translation, 0)',
    },
  },

  variants: {
    discreet: {
      true: {
        '--color': '#ccc',
      },
    },
    arrow: {
      left: {
        '--size': '1.1em',
        '--arrow-direction': -1,
        '--arrow-translation': '-0.25em',
        '--hover-color': 'unset',

        '&:before': {
          content: '',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: '1.05em',
          height: '1.05em',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginRight: '0.18em',
          transition: 'transform 0.4s ease',
          transform:
            'translateY(-2px) translateX(var(--hover-translation-distance, 0px)) scaleX(var(--arrow-direction, 1))',
        },
      },
      right: {
        '--size': '1.1em',
        '--arrow-direction': 1,
        '--arrow-translation': '0.25em',
        '--hover-color': 'unset',

        '&:after': {
          content: '',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: 'var(--size, 1.05em)',
          height: 'var(--size, 1.05em)',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginLeft: '0.18em',
          transition: 'transform 0.4s ease',
          transform:
            'translateY(-2px) translateX(var(--hover-translation-distance, 0px)) scaleX(var(--arrow-direction, 1))',
        },
      },
    },
    favicon: {
      true: {
        '--size': '1.1em',

        '&:before': {
          content: '',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: '1.05em',
          height: '1.05em',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginRight: '0.18em',
          transform: 'translateY(-2px)',
        },
      },
    },
    underline: {
      true: {
        borderBottom: '2px solid',
        borderColor: 'var(--border-color, transparent)',

        '--hover-color': 'unset',

        '&:focus': {
          '--border-color': 'purple',
        },

        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            '--border-color': 'blue',
          },
        },
      },
    },
  },
}

const Anchor = React.forwardRef((props: AnchorProps, ref: React.Ref<HTMLAnchorElement>) => {
  const { children, href, arrow, underline, favicon, discreet, ...rest } = props

  const icon = getIconString(href, arrow)

  return (
    <StyledAnchor
      arrow={arrow}
      css={{
        '--icon': `url(${icon})`,
      }}
      discreet={discreet}
      favicon={favicon}
      href={href}
      underline={underline}
      ref={ref}
      {...rest}
    >
      {children}
    </StyledAnchor>
  )
})

Anchor.displayName = 'Anchor'

export default Anchor
