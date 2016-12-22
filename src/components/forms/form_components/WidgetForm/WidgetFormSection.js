import React, { Component } from 'react'
import Row from '../Row'
import CONSTANTS from './constants'
import '../../../../styles/forms/form.css'

export default class Section extends Component {

  render() {
    const { type, fields } = this.props

    return (
      <div className="WidgetFormSection">
        <div className="WidgetFormSection__type">
          { type === CONSTANTS.SETUP ?
            CONSTANTS.SETUP_HEADING : CONSTANTS.SOURCE_HEADING }
        </div>
        <div className="WidgetFormSection__fields">
          {fields.map( ( field ) => (
              <Row
                { ...field }
                key={ `field-${ field.name }` } />
            )
          )}
        </div>
      </div>
    )
  }
}
