import React, { Component } from 'react'

import '../../../styles/account/details/button.css'

export default class Button extends Component {
  render() {
    const styleName = this.props.styleName ? this.props.styleName : ''
    return (
      <div className={'button ' + styleName }
        onClick={this.props.onClick}>
        <span>{ this.props.children }</span>
      </div>
    )
  }
}
