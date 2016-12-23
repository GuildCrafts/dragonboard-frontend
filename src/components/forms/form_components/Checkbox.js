import React, { Component } from 'react'

export default class CheckboxContainer extends Component {
  static contextTypes = {
    onChecked: React.PropTypes.func.isRequired,
  }

  render() {
    const { name, defaultValue } = this.props
    const { onChecked } = this.context

    return (
      <Checkbox
        fieldName={ name }
        defaultValue={ defaultValue }
        onChecked={ onChecked } />
    )
  }
}

const Checkbox = ({ defaultValue = false, onChecked, fieldName }) =>
  <input
    type="checkbox"
    name={ fieldName }
    value={ defaultValue }
    onChange={ onChecked } />
