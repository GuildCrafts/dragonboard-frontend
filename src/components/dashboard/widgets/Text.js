import React, { Component } from 'react'

import Header from './Header'

import "../../../styles/dashboard/widget/widget.css"

export default class Text extends Component {
  render() {
    const { title, size, x, y, message } = this.props
    const positionStyle = { top: x, left: y }

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1" style={ positionStyle }>
          <Header title={ title }/>
          <div className="widget-body body-text">
            { message.one.text }
          </div>
        </div>
      </article>
    )
  }
}
