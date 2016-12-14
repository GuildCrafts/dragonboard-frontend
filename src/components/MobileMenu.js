import React, { Component } from 'react'

import '../styles/home_nav.css'

class MobileMenu extends Component {
  render () {
      return <div className=''>
        <div className=''>
          <ul className=''>
            <li><a href='#'>INTEGRATIONS</a></li>
            <li><a href='#'>MOBILE APP</a></li>
            <li><a href='#'>WEBINARS</a></li>
            <li><a href='#'>DASHBOARD EXAMPLES</a></li>
            <li><a href='#'>FREE PLAYBOOK</a></li>
            <li><a href='#'>SUPPORT</a></li>
            <li><a href='#'>KPI EXAMPLES</a></li>
            <li><a href='#'>CUSTOMERS</a></li>
          </ul>
        </div>
      </div>
    }
}

export default MobileMenu