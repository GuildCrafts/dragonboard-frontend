import React from 'react'

const TextInput = ({ defaultValue, onChangeHandler, fieldName }) =>
  <input
    type="text"
    name={ fieldName }
    placeholder={ defaultValue }
    onChange={ onChangeHandler } />

export default TextInput
