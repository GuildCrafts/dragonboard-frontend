import React, { Component } from 'react'
import EditAccountDetails from './EditAccountDetails'

import '../../../styles/details_page_main.css'

class DetailsPageMain extends Component {
  render() {
    return (
      <div>
        <div className="top-border">
        </div>
        <div className="page-main">
          <div className="header">
            <h1 className="page-main__title">Account details</h1>
            <h2 className="page-main__subtitle">Manage your personal details</h2>
          </div>
          <EditAccountDetails />
        </div>
      </div>
    )
  }
}

export default DetailsPageMain
