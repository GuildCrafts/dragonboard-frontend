import React, { Component } from 'react'

import Header from './Header'

import "../../../styles/dashboard/widget/widget.css"
import "../../../styles/dashboard/widget/image.css"

export default class Image extends Component {
  render() {
    const { title, size, x, y, path, reload } = this.props
    const positionStyle = { top: x, left: y }

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1 transparent" style={ positionStyle }>
          <Header title={ title }/>
          <div className="image-wrapper">
            <img className="widget-image" src={ path } alt={ title }/>
          </div>
        </div>
      </article>
    )
  }
}
