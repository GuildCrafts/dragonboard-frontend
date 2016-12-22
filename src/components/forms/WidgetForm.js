import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Button from '../Button.js'
import WidgetPreview from './form_components/WidgetForm/WidgetPreview'
import WidgetFormSection from './form_components/WidgetForm/WidgetFormSection'
import '../../styles/forms/widget_form.css'
import * as formActions from '../../actions/form/actions'

class WidgetForm extends Component {
  static childContextTypes = {
    onChange: React.PropTypes.func,
    updateValue: React.PropTypes.func,
    formData: React.PropTypes.object
  }

  updateValue( key, value ) {
    this.props.formFieldUpdate( key, value )
  }

  onChange( event ) {
    this.updateValue( event.target.name, event.target.value )
  }

  componentWillMount() {
    this.setupState()
  }

  setupState() {
    const { sections } = this.props

    sections.forEach( section => {
      section.fields.forEach ( field => {
        const { name, defaultValue } = field

        this.updateValue( name, defaultValue )
        this.setupNestedDropdown( field )
      })
    })
  }

  setupNestedDropdown( field ) {
    const { type, options, defaultValue } = field

    if ( type === 'nested-dropdown' ) {
      const nestedValue = options.find( option => {
        return option.value === defaultValue
      }).field

      this.updateValue( nestedValue.name, nestedValue.defaultValue )
    }
  }

  getChildContext() {
    return {
      onChange: this.onChange.bind( this ),
      updateValue: this.updateValue.bind ( this ),
      formData: this.props.form
    }
  }

  render() {
    if ( Object.keys( this.props.form.values ).length === 0 ) {
      return <div> Loading... </div>
    }

    const { type, sections, description, image } = this.props

    return (
      <div className="WidgetForm">
        <div className="WidgetForm__header">
          <h1>{ type }</h1>
        </div>
        <Form
          className="WidgetForm__Form">
          {sections.map( ( section ) => (
              <WidgetFormSection
                { ...section }
                key={`section-${ section.type }`}
              />
            )
          )}
          <div className="WidgetForm__buttons">
            <Button type="submit">Add Widget</Button>
            <Button type="cancel">Cancel</Button>
          </div>
        </Form>
        <WidgetPreview image={ image } description={ description }/>
      </div>
    )
  }
}

export default connect( state =>
   ({ form: state.form }), formActions )( WidgetForm )
