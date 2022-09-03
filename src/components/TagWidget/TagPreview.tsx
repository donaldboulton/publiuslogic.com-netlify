import * as React from 'react'
import { Component, createElement } from 'react'

import TagStyles from "./style.module.css"

export class TagPreview extends Component {
  render() {
    return createElement('ul', {
      className: TagStyles.tags,
    },
      this.props.value.map(function(value, index) {
        return createElement('li', {
          className: TagStyles.tag,
          key: index
        }, value)
      })
    )
  }
}
export default TagPreview