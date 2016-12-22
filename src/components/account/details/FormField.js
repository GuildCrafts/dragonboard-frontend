import React, { Component } from 'react'

import '../../../styles/account/details/form_field.css'

export default class EditAccountDetails extends Component {
  render() {
    const { label, value, editing } = this.props

    return (
      <div className="form">
        <div className="form--label">{ label }</div>
        { editing
          ? <input className="form--field--active" defaultValue={ value } />
          : <div className="form--field">{ value }</div> }
      </div>
    )
  }
}
