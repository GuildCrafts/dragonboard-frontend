import React, { Component } from 'react'

import '../styles/home_nav.css'

class HomeNavHamburger extends Component {
  render () {
      return (
        <a href="" className="hamburger-menu-toggle">
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </a>
      )
    }
}

export default HomeNavHamburger