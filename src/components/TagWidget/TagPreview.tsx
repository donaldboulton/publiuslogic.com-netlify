'use client'

import { Component, createElement } from 'react'

import './style.module.css'

export class TagPreview extends Component {
  render() {
    return createElement(
      'ul',
      {
        className: tags,
      },
      this.props.value.map(function (value, index) {
        return createElement(
          'li',
          {
            className: tag,
            key: index,
          },
          value
        )
      })
    )
  }
}
export default TagPreview
