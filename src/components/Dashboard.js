import React, { Component } from 'react'
import { connect } from 'react-redux'

import DashNav from './DashNav'
import LocalNav from './LocalNav'
import DashboardBody from './DashboardBody'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-home">
        <DashNav/>
        <LocalNav/>
        <DashboardBody widgets={this.props.widgets} />
      </div>
    )
  }
}

export default connect( state => ({ widgets: state.widgets }) )( Dashboard )

