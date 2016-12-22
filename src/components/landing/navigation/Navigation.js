import React, { Component } from 'react'

import Hamburger from './Hamburger'
import DropdownButton from './DropdownButton'

import '../../../styles/landing/navigation/navigation.css'
import '../../../styles/landing/navigation/menu.css'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="landing-navigation clearfix">
        <div className="navigation-container">
          <div className="landing-navigation-left">
            <a className="logo" href="#">
              <div className="logo-green-square">
                <div>D</div>
              </div>
              <img src="/images/logo.svg" alt="presentation" />
            </a>
          </div>

          <div className="landing-navigation-right">
            <div className="landing-navigation-menu">
              <a className="landing-navigation-grey" href="#">product</a>
              <a className="landing-navigation-grey" href="#">PRICING</a>
              <a className="landing-navigation-grey" href="#">BLOG</a>
              <div className="navigation-dropdown">
                <DropdownButton />
              </div>
              <a className="login-navigation" href="#">LOGIN</a>
              <a className="demonstration-button" href="#">BOOK A DEMO</a>
              <input
                className="trial-input"
                type="text"
                placeholder="Email address" />
              <a className="navigation-trial-button" href="/register">Free Trial</a>
            </div>
          </div>
          <Hamburger />
        </div>
      </nav>
    )
  }
}
