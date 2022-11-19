import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import './Cursor.css'

export default class Cursor extends Component {
  static propTypes = {
    blink: PropTypes.bool,
    show: PropTypes.bool,
    element: PropTypes.node,
    hideWhenDone: PropTypes.bool,
    hideWhenDoneDelay: PropTypes.number,
    isDone: PropTypes.bool,
  }

  static defaultProps = {
    blink: true,
    show: true,
    element: '|',
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
    isDone: false,
  }

  constructor(props) {
    super(props)
    this._isReRenderingCursor = false
    this.state = {
      shouldRender: this.props.show,
    }
  }

  componentWillReceiveProps(nextProps) {
    const shouldHide = !this.props.isDone && nextProps.isDone && this.props.hideWhenDone
    if (shouldHide) {
      setTimeout(() => this.setState({ shouldRender: false }), this.props.hideWhenDoneDelay)
    }
  }

  componentDidUpdate() {
    const { show, isDone } = this.props
    if (!show) {
      return
    }
    if (isDone) {
      return
    }
    if (this._isReRenderingCursor) {
      return
    }
    this._reRenderCursor()
  }

  _reRenderCursor() {
    this._isReRenderingCursor = true
    this.setState({ shouldRender: false }, () => {
      this.setState({ shouldRender: true }, () => {
        this._isReRenderingCursor = false
      })
    })
  }

  render() {
    if (this.state.shouldRender) {
      const className = this.props.blink ? ' Cursor--blinking' : ''
      return <span className={`Cursor${className}`}>{this.props.element}</span>
    }
    return null
  }
}
