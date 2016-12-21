import React, { Component } from 'react'

import '../../../styles/account/details/side_menu.css'

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <div className="side-menu-list">
          <div className="side-menu-list-item active">Account</div>
          <div className="side-menu-list-item"><a href="#">Dashboard</a></div>
        </div>
      </div>
    )
  }
}

export default SideMenu
