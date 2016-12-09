import React, { Component } from 'react'
import '../../styles/widget/widget.css'
import QRCodeImage from './QRCodeImage'
import Header from './Header'

class QRCode extends Component {
  render() {
    const { title, x, y, url } = this.props
    const positionStyle = { top: x, left: y }

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1" style={positionStyle}>
          <Header title={title} />
          <div className="widget-body flex-center">
            <QRCodeImage url={url} />
          </div>
        </div>
      </article>
    )
  }
}

export default QRCode
