import React, { Component } from 'react'

import '../../../styles/account/details/form_field.css'

export default class EditAccountDetails extends Component {
  render() {
    const { label, value, editing } = this.props
    if ( !editing ) {
      return (
        <div className="form">
          <div className="form--label">{ label }</div>
          <div className="form--field">{ value }</div>
        </div>
      )
    } else {
      return (
        <div className="form">
          <div className="form--label">{ label }</div>
          <input className="form--field--active" defaultValue={ value } />
        </div>
      )
    }
  }
}
