import React, { Component } from 'react'

import '../../../styles/landing/navigation/menu.css'

export default class Menu extends Component {
  static defaultProps() {
    return { isOpen: false }
  }

  render() {
    if ( this.props.isOpen ) {
      return <div className='landing-navigation-dropdown-container'>
        <div className='landing-navigation-dropdown'>
          <ul className='landing-navigation-dropdown-content'>
            <li><a href='#'>INTEGRATIONS</a></li>
            <li><a href='#'>DASHBOARD EXAMPLES</a></li>
            <li><a href='#'>KPI EXAMPLES</a></li>
          </ul>
        </div>
      </div>
    }
    return null
  }
}
