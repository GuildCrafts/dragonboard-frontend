import React, { Component } from 'react'

import EditAccountDetails from './EditAccountDetails'
import ChangePassword from './ChangePassword'
import Subscribe from './Subscribe'
import EditCompany from './EditCompany'
import CancelAccount from './CancelAccount'

import '../../../styles/account/details/details_page_main.css'

class DetailsPageMain extends Component {
  render() {
    return (
      <div>
        <div className="page-main">
          <div className="header">
            <h1 className="page-main__title">Account details</h1>
            <h2 className="page-main__subtitle">Manage your personal details</h2>
          </div>
          <EditAccountDetails />
          <ChangePassword />
          <Subscribe />
          <EditCompany />
          <CancelAccount />
        </div>
      </div>
    )
  }
}

export default DetailsPageMain
