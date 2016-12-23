import React, { Component } from 'react'
import { RadioGroup, Radio } from 'react-radio-group'
import '../../../styles/forms/form.css'

export default class RadioField extends Component {
  static contextTypes = {
    updateValue: React.PropTypes.func.isRequired,
    formData: React.PropTypes.object.isRequired
  }

  selectRadio( value ) {
    const { name } = this.props
    const { updateValue } = this.context

    updateValue( name, value )
  }

  getRadioOptions() {
    const { options } = this.props

    return options.map( ( option ) =>
      <div
        key={ `radio-section-${ option.value }` }>
          <Radio key={ `radio-${ option.value }` } value={ option.value } />
          <label>{ option.label }</label>
      </div>
    )
  }

  render() {
    const { name, options } = this.props
    const { formData } = this.context
    let radioOptions = this.getRadioOptions()

    return (
      <RadioGroup
        onChange={ this.selectRadio.bind( this ) }
        selectedValue={ formData.values[ name ] }
        name={ name }
        key={`radio-container-${ options.defaultValue }`}>
        { radioOptions }
      </RadioGroup>
    )
  }
}
