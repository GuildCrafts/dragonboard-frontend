import React, { Component } from 'react'
import "../../styles/widget.css"
import qrCode from 'qrcode-npm'

class QRCode extends Component {

  constructor( props ) {
    super( props )
    this.generateQRCode = this.generateQRCode.bind( this )
  }

  generateQRCode( url ) {
    const qr = qrCode.qrcode( 4, 'M' )

    qr.addData( url )
    qr.make()

    return qr.createImgTag( 4 )
  }

  render() {
    const { specification } = this.props
    const imageTag = this.generateQRCode( specification.url )
    const src = imageTag.replace( '" width="164" height="164"/>', '' ).replace( '<img src="', '' )

    const positionStyle = { top: specification.position.x, left: specification.position.y }
    return (
      <article>
        <div className="widget widget-width-1 widget-height-1" style={ positionStyle }>
          <header>
            <span>
              <label className="header-text">
                { specification.title }
              </label>
            </span>
          </header>
          <div className="widget-body flex-center">
            <img src={ src } width='146' height='146' alt="QR Code"/>
          </div>
        </div>
      </article>
    )
  }
}

export default QRCode
