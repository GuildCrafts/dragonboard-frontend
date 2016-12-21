import React, { Component } from 'react'

import Button from './Button'
import FormField from './FormField'

import '../../../styles/account/details/edit_company.css'

export default class EditCompany extends Component {
  render() {
    return (
      <div className="edit-company">
        <FormField label='Company' value='Learners Guild' />
        <Button name="Change company details"/>
      </div>
    )
  }
}
