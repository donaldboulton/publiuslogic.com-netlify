import * as React from 'react'
import { useRef, useState, ReactNode } from 'react'
import { ControlledMenu, useHover, useMenuState } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '@szhsin/react-menu/dist/theme-dark.css'

interface ToolTipMenuProps {
  title: string
  children: ReactNode
}

export default function ToolTipMenu({ title, children, state }: ToolTipMenuProps) {
  /* @typescript-eslint/no-unused-vars */
  const [isDark, setDark] = useState(true)
  const boundingBoxRef = useRef(null)
  const anchorRef = useRef(null)
  const [menuState, toggle] = useMenuState({ transition: true })
  /* @typescript-eslint/no-unused-vars */
  const [target, setTarget] = useState(null)
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle)

  const tooltipProps = {
    state,
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
      <div ref={boundingBoxRef} className="overflow-auto relative">
        <ControlledMenu
          {...tooltipProps}
          {...hoverProps}
          {...menuState}
          align="center"
          direction="top"
          onClose={() => toggle(false)}
          anchorRef={anchorRef}
          theming={isDark ? 'dark' : undefined}
        >
          {children}
        </ControlledMenu>
      </div>
    </>
  )
}
