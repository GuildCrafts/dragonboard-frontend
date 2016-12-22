import React, { Component } from 'react'

import '../../../styles/dashboard/secondary_navigation/secondary_navigation.css'
import '../../../../public/arrow.svg'

export default class SecondaryNavigation extends Component {
  render() {
    return (
      <nav className="secondary-navigation">
        <div className="secondary-navigation-left"> Company Dasboard </div>
        <div className="secondary-navigation-right"></div>
          <img className="logo-type" width="30"
            src="images/share_arrow.svg" alt="presentation"/>
          <a href="#" className="share">Share</a>
          <img className="logo-type" width="20" src="images/settings_gear.svg" alt="presentation"/>
          <a href="#" className="settings">Settings</a>
          <img className="logo-type" width="20"
            src="images/full_screen_arrows.svg" alt="presentation"/>
          <a href="#" className="full-screen">Full Screen</a>
          <div className="widget-navigation-button">
            <img className="logo-type" width="20"
              src="images/add_plus.svg" alt="presentation"/>
            <a href="#">Add Widget</a>
          </div>
      </nav>
    )
  }
}
