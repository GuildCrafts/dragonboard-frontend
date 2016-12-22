import React, { Component } from 'react'

import AccountMenuDropdown from './AccountMenuDropdown'

import '../../../styles/dashboard/navigation/navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="dashboard-navigation">
        <div className="dashboard-menu"> &#9776; Dashboards </div>
        <div className="dashboard-right">
          <div className="logo-white-square">
            <div>D</div>
          </div>
          <div className="dashboard-navigation-right">
            <div className="trial-pill">
              __ days left of your trial
              <span>&#8212; Upgrade</span>
            </div>
            <div className="help-navigation">
              <p>Help</p>
              <img className="help-arrow" src="images/help_arrow.svg"
                alt="presentation" />
            </div>
            <AccountMenuDropdown />
          </div>
        </div>
      </nav>
    )
  }
}
