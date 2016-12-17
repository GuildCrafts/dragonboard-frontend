import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Menu from './Menu'

export default class AccountMenuDropdown extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      active: false
    }
  }

  toggleMenu() {
    this.setState({
      active: ! this.state.active
    })
  }

  render() {
    return (
    <div className="account-menu-dropdown">
      <div id="menu">
        <div className="account-icon" onClick={ this.toggleMenu.bind( this ) }>
          <span>A</span>
        </div>
        <ReactCSSTransitionGroup transitionName="menu"
          transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 100 }>
          <Menu active={ this.state.active } />
        </ReactCSSTransitionGroup>
      </div>
    </div>
    )
  }
}
