import * as React from 'react'
import { useRef, useState, ReactNode } from 'react'
import { ControlledMenu, MenuItem, useHover, useMenuState } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '@szhsin/react-menu/dist/theme-dark.css'

interface HoverMenuWithTransitionProps {
  title: string
  children: ReactNode
}

export default function HoverMenuWithTransition({ title, children }: HoverMenuWithTransitionProps) {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [isDark, setDark] = useState(true)
  const ref = useRef(null)
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [target, setTarget] = useState(null)
  const [menuState, toggle] = useMenuState({ transition: true })
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle)

  const tooltipProps = {
    captureFocus: false,
    arrow: true,
    role: 'tooltip',
    align: 'center',
    viewScroll: 'auto',
    position: 'anchor',
    boundingBoxPadding: '1 8 1 1',
  }

  return (
    <>
      <span className="text-slate-400 items-center" ref={ref} {...anchorProps} portal={{ target }}>
        {title}
      </span>
      <ControlledMenu
        {...tooltipProps}
        {...hoverProps}
        {...menuState}
        anchorRef={ref}
        onClose={() => toggle(false)}
        theming={isDark ? 'dark' : undefined}
      >
        <MenuItem className="text-slate-300 px-2 py-1 mx-3 items-center">{children}</MenuItem>
      </ControlledMenu>
    </>
  )
}
