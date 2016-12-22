import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleEditMode } from '../../../actions/account_details'
import Button from './Button'

import '../../../styles/account/details/update_toggle.css'

class UpdateToggle extends Component {
  handleClick() {
    this.props.toggleEditMode()
  }

  render() {
    if ( this.props.editing ) {
      return (
        <div className="edit-details__button--active">
          <Button styleName="button--save">Save changes</Button>
          <Button styleName="button--cancel"
            onClick={this.handleClick.bind( this )}>
            Cancel
          </Button>
        </div>
      )
    } else {
      return (
        <Button styleName="edit-details__button"
          onClick={this.handleClick.bind( this )}>
          { this.props.children }
        </Button>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
    toggleEditMode: () => dispatch( toggleEditMode() )
})

const mapStateToProps = state => ({
  editing: state.accountDetails.generalInformation.editing
})

export default connect( mapStateToProps, mapDispatchToProps )( UpdateToggle )
