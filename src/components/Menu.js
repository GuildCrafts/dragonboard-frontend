import React, { Component } from 'react'
import '../styles/menu.css'

export default class Menu extends Component {
  render() {
    if ( this.props.active ) {
      return <div className="account-menu">
          <div className="account-menu-list">
            <div className="account-menu-list-item"><a href="/account">Account</a></div>
            <div className="account-menu-list-item"><a href="#">Logout</a></div>
          </div>
        </div>
    } else {
      return null
    }
  }
}
