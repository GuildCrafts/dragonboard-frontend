import React, { Component } from 'react'

import '../../../styles/account/details/form_field.css'

export default class EditAccountDetails extends Component {
  render() {
    const { label, value } = this.props
    return (
      <div className="form--read-only">
        <div className="form--label">{ label }</div>
        <div className="form--field">{ value }</div>
      </div>
    )
  }
}
