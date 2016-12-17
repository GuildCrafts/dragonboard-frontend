import React, { Component } from 'react'

import Navigation from './navigation/Navigation'
import SecondaryNavigation from './secondary_navigation/SecondaryNavigation'
import Body from './Body'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-landing">
        <Navigation/>
        <SecondaryNavigation/>
        <Body/>
      </div>
    )
  }
}
