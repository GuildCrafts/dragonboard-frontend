import React, { Component } from 'react'
import "../../styles/widget.css"

class Text extends Component {

  render() {
    const { specification } = this.props
    const { message } = specification

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
          <div className="widget-body body-text">
            { message.one.text }
          </div>
        </div>
      </article>
    )
  }
}

export default Text
