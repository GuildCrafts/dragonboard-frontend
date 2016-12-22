import React, { Component } from 'react'

import '../../styles/dashboard/welcome.css'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="build-dashboard">
          <img className="widget-placeholder"
            src="images/widget_placeholder.svg" alt="presentation" />
          <a href="#" className="widget-button">Build Your Dashboard</a>
        </div>
      </div>
    )
  }
}
