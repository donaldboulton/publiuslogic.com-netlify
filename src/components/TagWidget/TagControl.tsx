import * as React from 'react'
import { Component, createElement } from 'react'

export class TagControl extends Component {
  handleChange = e => {
    const separator = this.props.field.get('separator', ', ')
    this.props.onChange(e.target.value.split(separator).map(e => e.trim()))
  }

  render() {
    const separator = this.props.field.get('separator', ', ')
    const value = this.props.value
    return createElement('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      value: value ? value.join(separator) : '',
      onChange: this.handleChange,
    })
  }
}

export default TagControl
