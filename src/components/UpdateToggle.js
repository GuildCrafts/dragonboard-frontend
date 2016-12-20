import React, { Component } from 'react'
import '../styles/update_toggle.css'

export default class UpdateToggle extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      active: false
    }
  }

  handleClick () {
    var active = !this.state.isActive;
    this.setState({ isActive: active });
  }

  render() {
    if ( ! this.props.active ) {
      return <div className="edit-details__button" onClick={this.handleClick.bind(this)}>
        <span>{ this.props.name }</span>
      </div>
    }
    else {
      return <div className="edit-details__button">
        <span>Save Changes</span>
      </div>
    }
  }
}
