import React, { Component } from 'react'
import DashNav from '../../DashNav'
import SideMenu from './SideMenu'
import DetailsPageMain from './DetailsPageMain'

import '../../../styles/account/details/account_details_page.css'

class AccountDetailsPage extends Component {
  render() {
    return (
      <div className="account-details-page">
        <div className="navigation">
          <DashNav />
          <div className="top-border" />
        </div>
        <SideMenu />
        <DetailsPageMain />
      </div>
    )
  }
}

export default AccountDetailsPage
