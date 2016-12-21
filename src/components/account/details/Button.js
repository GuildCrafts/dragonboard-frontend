import React, { Component } from 'react'

import '../../../styles/account/details/button.css'

export default class Button extends Component {
  render() {
    return (
      <div className="button">
        <span>{ this.props.name }</span>
      </div>
    )
  }
}
