import React, { Component } from 'react'
import Field from './Field'
import '../../../styles/forms/form.css'

export default class Row extends Component {

  labelChild() {
    const { type, name } = this.props

    if( type === 'nested-dropdown' ) {
      return null
    } else {
      return <label className="Form__Row__label">{ name }</label>
    }
  }

  render() {
    const className = this.props.type==='nested-dropdown' ? null : 'Form__Row'

    return (
      <div className={className}>
        { this.labelChild() }
        <Field className="Form__Row__Field" { ...this.props } />
      </div>
    )
  }
}
