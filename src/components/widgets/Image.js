import React, { Component } from 'react'
import '../../styles/widget/widget.css'
import '../../styles/widget/image.css'
import Header from './Header'

class Image extends Component {
  render() {
    const { title, x, y, path } = this.props
    const positionStyle = { top: x, left: y }

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1 transparent" style={positionStyle}>
          <Header title={title} />
          <div className="image-wrapper">
            <img className="widget-image" src={path} alt={title} />
          </div>
        </div>
      </article>
    )
  }
}

export default Image
