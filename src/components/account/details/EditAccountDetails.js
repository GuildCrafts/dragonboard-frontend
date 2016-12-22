import React, { Component } from 'react'
import { connect } from 'react-redux'

import UpdateToggle from './UpdateToggle'
import FormField from './FormField'

import '../../../styles/account/details/edit_account_details.css'

class EditAccountDetails extends Component {
  render() {
    const { editing } = this.props
    return (
      <div className="edit-account">
        <div className="update-toggle">
          <UpdateToggle>Edit these details</UpdateToggle>
        </div>
        <div className="edit-account-form">
          <div className="edit-account-form__name">
            <FormField label="First name" value="Ana" editing={editing} />
            <FormField label="Last name" value="Sauceda" editing={editing} />
          </div>
          <div className="edit-account-form__email">
            <FormField label="Email" value="ana@example.com" editing={editing} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  editing: state.accountDetails.generalInformation.editing
})

export default connect( mapStateToProps )( EditAccountDetails )
