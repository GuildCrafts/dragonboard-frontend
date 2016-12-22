import React, { Component } from 'react'
import '../../../../styles/forms/form.css'

export default class WidgetPreview extends Component {
  render() {
    const { description, image, title } = this.props

    return (
      <div className="WidgetPreview">
        <img alt={title} src={image} />
        <div>{description}</div>
      </div>
    )
  }
}
