import React, { Component } from 'react'

import '../../../styles/landing/navigation/hamburger.css'

export default class Hamburger extends Component {
  render() {
      return (
        <a href="" className="hamburger-menu-toggle">
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </a>
      )
    }
}
