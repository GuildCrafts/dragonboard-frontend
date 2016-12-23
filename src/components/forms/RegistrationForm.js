import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../Button'
import TextInputContainer from './form_components/TextInputContainer'
import CheckboxContainer from './form_components/Checkbox'
import * as formActions from '../../actions/form/actions'
import Form from './Form'

class RegistrationForm extends Component {
  static childContextTypes = {
    onChange: React.PropTypes.func,
    onChecked: React.PropTypes.func
  }

  updateValue( key, value ) {
    this.props.formFieldUpdate( key, value )
  }

  onChange( event ) {
    this.updateValue( event.target.name, event.target.value )
  }

  onChecked( event ) {
    this.updateValue( event.target.name, event.target.checked )
  }

  getChildContext() {
    return {
      onChange: this.onChange.bind( this ),
      onChecked: this.onChecked.bind( this )
    }
  }

  render() {
    return (
      <Form
        action="http://localhost:5000/api/v1/users/register"
        method="post"
        className="RegistrationForm__Form">
        <TextInputContainer name="name" defaultValue="Your Name" />
        <TextInputContainer name="email" defaultValue="example@jrob.com" />
        <TextInputContainer name="password" defaultValue="password123" />
        <TextInputContainer name="phone_number" defaultValue="(202) 555-5555" />
        <TextInputContainer name="company" defaultValue="Learner's Guild" />
        <CheckboxContainer name="newsletter_subscribed" />
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect( state =>
    ({ form: state.form }), formActions )( RegistrationForm )
