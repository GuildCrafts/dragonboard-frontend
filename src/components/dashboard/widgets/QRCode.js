import React, { Component } from 'react'

import QRCodeImage from './QRCodeImage'
import Header from './Header'

import "../../../styles/dashboard/widget/widget.css"

export default class QRCode extends Component {
  render() {
    const { title, x, y, size, url } = this.props
    const positionStyle = { top: x, left: y }

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1" style={ positionStyle }>
          <Header title={ title }/>
          <div className="widget-body flex-center">
            <QRCodeImage url={ url }/>
          </div>
        </div>
      </article>
    )
  }
}
