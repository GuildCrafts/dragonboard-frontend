import React, { Component } from 'react'

import UpdateToggle from './UpdateToggle'
import FormField from './FormField'

import '../../../styles/edit_account_details.css'

class EditAccountDetails extends Component {
  render() {
    return (
      <div className="edit-account">
        <div className="update-toggle">
          <UpdateToggle name="Edit these details"/>
        </div>
        <div className="edit-account-form">
          <div className="edit-account-form__name">
            <FormField label='First name' value='Ana' />
            <FormField label='Last name' value='Sauceda' />
          </div>
          <div className="edit-account-form__email">
            <FormField label='Email' value='ana@example.com' />
          </div>
        </div>
      </div>
    )
  }
}

export default EditAccountDetails
