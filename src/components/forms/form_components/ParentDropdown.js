import React, { Component } from 'react'
import '../../../styles/forms/form.css'

export default class ParentDropdown extends Component {
  static contextTypes = {
    onChange: React.PropTypes.func.isRequired,
    updateValue: React.PropTypes.func.isRequired
  }

  getDropdownOptions() {
    const { options } = this.props

    return options.map(
      option => (
        <option value={option.value} key={`dropdown-option-${ option.value }`}>
          { option.label }
        </option>
      )
    )
  }

  updateParentAndChild( event ) {
    const { onChange, updateValue } = this.context
    const { options } = this.props
    const childDropdown = options.find( option =>
      option.value === event.target.value ).field

    onChange( event )
    updateValue( childDropdown.name, childDropdown.defaultValue )
  }

  render() {
    const { name, defaultValue } = this.props
    let dropdownOptions = this.getDropdownOptions()

    return (
      <select
        defaultValue={ defaultValue }
        name={ name }
        id={`dropdown-select-${ name }`}
        key={`dropdown-select-${ name }`}
        onChange={ this.updateParentAndChild.bind( this ) }>
          { dropdownOptions }
      </select>
    )
  }
}
