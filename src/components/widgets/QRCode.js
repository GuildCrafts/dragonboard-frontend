import React, { Component } from 'react'
import "../../styles/widget/widget.css"
import qrCode from 'qrcode-npm'
import Header from './Header'

const QRCodeImage = ( url ) => {
  const qr = qrCode.qrcode( 4, 'M' )

  qr.addData( url )
  qr.make()

  const imageTag = qr.createImgTag( 4 )
  const src = imageTag.replace( '" width="164" height="164"/>', '' ).replace( '<img src="', '' )

  return <img src={ src } width='146' height='146' alt="QR Code"/>
}

class QRCode extends Component {
  constructor( props ) {
    super( props )
  }

  render() {
    const { title, x, y, size, url } = this.props
    const positionStyle = { top: x, left: y }

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1" style={ positionStyle }>
          <Header title={ title }/>
          <div className="widget-body flex-center">
            {QRCodeImage(url)}
          </div>
        </div>
      </article>
    )
  }
}

export default QRCode
