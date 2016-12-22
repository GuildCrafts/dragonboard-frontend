import React, { Component } from 'react'
import Field from './Field'
import '../../../styles/forms/form.css'

export default class Row extends Component {

  labelChild() {
    const { type, name } = this.props

    if( type === 'nested-dropdown' ) {
      return null
    } else {
      return <label>{ name }</label>
    }
  }

  render() {
    return (
      <div>
        { this.labelChild() }
        <Field { ...this.props } />
      </div>
    )
  }
}
