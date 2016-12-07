import React, { Component } from 'react'
import "../../styles/widget.css"

class Image extends Component {

  render() {
    const { specification } = this.props

    const positionStyle = { top: specification.position.x, left: specification.position.y }
    return (
      <article>
        <div className="widget widget-width-1 widget-height-1 transparent" style={ positionStyle }>
          <header>
            <span>
              <label className="header-text">
                { specification.title }
              </label>
            </span>
          </header>
          <div className="image-wrapper">
            <img className="widget-image" src={ specification.path } alt={ specification.title }/>
          </div>
        </div>
      </article>
    )
  }
}

export default Image
