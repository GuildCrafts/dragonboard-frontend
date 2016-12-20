import React, { Component } from 'react'
import UpdateToggle from './UpdateToggle'
import '../../../styles/edit_account_details.css'

class EditAccountDetails extends Component {
  render() {
    return (
      <div className="edit-account">
        <div className="update-toggle">
          <UpdateToggle name="Edit these details"/>
        </div>
        <div className="edit-account-form">
        </div>
      </div>
    )
  }
}

export default EditAccountDetails
