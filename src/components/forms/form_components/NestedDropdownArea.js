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
      <div className="Form__nested-dropdown">
        <div className="Form__nested-dropdown__parent Form__Row">
          <label className="Form__Row__label">{ name }</label>
          <ParentDropdown { ...this.props } />
        </div>
        <div className="Form__nested-dropdown__child Form__Row">
          <label className="Form__Row__label">{ nestedDropdownField.name }</label>
          <Dropdown
            { ...nestedDropdownField } />
        </div>
      </div>
    )
  }
}
