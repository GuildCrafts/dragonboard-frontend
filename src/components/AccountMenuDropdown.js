import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../styles/account_menu_dropdown.css'

class AccountMenuDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div className="account-menu">
                <div className="account-menu-list">
                  <div className="account-menu-list-item"><a href="#">Account </a></div>
                  <div className="account-menu-list-item"><a href="#">Logout </a></div>
                </div>
              </div>
    } else {
      menu = "";
    }
    return (
      <div id="menu">
        <div className="account-icon" onClick={ this.toggleMenu }>
          <span>A</span>
        </div>
      <ReactCSSTransitionGroup transitionName="menu" transitionEnterTimeout={1000} transitionLeaveTimeout={800}>
        {menu}
      </ReactCSSTransitionGroup>
    </div>
    )
  }
}

export default AccountMenuDropdown
