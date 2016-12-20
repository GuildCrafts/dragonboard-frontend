import React, { Component } from 'react'
import DashNav from '../../DashNav'
import SideMenu from './SideMenu'
import DetailsPageMain from './DetailsPageMain'

class AccountDetailsPage extends Component {
  render() {
    return (
      <div className="account-details-page">
        <DashNav />
        <SideMenu />
        <DetailsPageMain />
      </div>
    )
  }
}

export default AccountDetailsPage
