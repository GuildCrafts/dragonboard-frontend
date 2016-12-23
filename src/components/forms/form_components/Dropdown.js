import React, { Component } from 'react'
import '../../../styles/forms/form.css'

export default class Dropdown extends Component {
  static contextTypes = {
    onChange: React.PropTypes.func.isRequired
  }

  options() {
    return this.props.options.map( option =>
      <option value={option.value} key={option.label}>{option.label}</option>
    )
  }

  render() {
    const { name, defaultValue } = this.props
    const { onChange } = this.context
    return (
      <select
        defaultValue={ defaultValue }
        name={ name }
        id={ `dropdown-select-${ name }` }
        key={ `dropdown-select-${ name }` }
        onChange={ onChange }>
          { this.options() }
      </select>
    )
  }
}
