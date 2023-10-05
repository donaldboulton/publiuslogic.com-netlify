import * as React from 'react'
import { ReactNode, ElementType } from 'react'
import * as CSS from 'csstype'

interface HiddenProps {
  as: ElementType
  children?: ReactNode
  id?: string
}

const visuallyHiddenClass: CSS.Properties = {
  border: '0 !important',
  clip: 'rect(1px, 1px, 1px, 1px) !important',
  clipPath: 'inset(50%) !important',
  height: '1px !important',
  margin: '-1px !important',
  overflow: 'hidden !important',
  padding: '0 !important',
  position: 'absolute !important',
  width: '1px !important',
  whiteSpace: 'nowrap !important',
}

const VisuallyHidden = ({ as: Component, ...props }: HiddenProps) => (
  <Component {...props} style={visuallyHiddenClass}>
    {props.children}
  </Component>
)

export default VisuallyHidden
