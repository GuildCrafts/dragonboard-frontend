import React, { Component } from 'react'

import '../../../styles/account/details/update_toggle.css'

export default class UpdateToggle extends Component {
  render() {
    return (
      <div className="edit-details__button">
        <span>{ this.props.name }</span>
      </div>
    )
  }
}
