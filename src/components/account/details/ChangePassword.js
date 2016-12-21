import React, { Component } from 'react'

import Button from './Button'
import FormField from './FormField'

import '../../../styles/account/details/change_password.css'

export default class EditAccountDetails extends Component {
  render() {
    return (
      <div className="change-password">
        <FormField label='Password' value='******' />
        <Button name="Change password"/>
      </div>
    )
  }
}
