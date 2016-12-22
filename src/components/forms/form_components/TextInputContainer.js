import React, { Component } from 'react'
import TextInput from './TextInput'

export default class TextInputContainer extends Component {
  static contextTypes = {
    onChange: React.PropTypes.func.isRequired
  }

  render() {
    const { defaultValue, name } = this.props
    const { onChange } = this.context

    return (
      <TextInput
        fieldName={ name }
        defaultValue={ defaultValue }
        onChangeHandler={ onChange }
      />
    )
  }
}
