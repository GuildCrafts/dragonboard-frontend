import React, { Component } from 'react'
import Dropdown from './Dropdown'
import ParentDropdown from './ParentDropdown'
import '../../../styles/forms/form.css'

export default class NestedDropdownArea extends Component {
  static contextTypes = {
    formData: React.PropTypes.object.isRequired
  }

  getNestedDropdown() {
    const { options, name } = this.props

    return options.find( option => {
      return option.value === this.context.formData.values[name]
    }).field
  }

  render() {
    const { name } = this.props
    let nestedDropdownField = this.getNestedDropdown()

    return (
      <div className="form__nested-dropdown">
        <div className="form__nested-dropdown__parent">
          <label>{ name }</label>
          <ParentDropdown { ...this.props } />
        </div>
        <div className="form__nested-dropdown__child">
          <label>{ nestedDropdownField.name }</label>
          <Dropdown
            { ...nestedDropdownField } />
        </div>
      </div>
    )
  }
}
