import * as React from 'react'
import { ReactNode } from 'react'
import * as CSS from 'csstype'
import ListItem from './ListItem'

interface ListProps {
  children: ReactNode
}

const listStyle: CSS.Properties = {
  margin: '0 0 1.45rem 0',
  padding: '0',
  color: 'inherit',
  listStylePosition: 'outside',
  listStyleImage: 'none',
  listStyle: 'none',
}
const List = (props: ListProps) => {
  const { children, ...rest } = props

  return (
    <div style={listStyle} {...rest}>
      {children}
    </div>
  )
}

List.Item = ListItem

export default List
