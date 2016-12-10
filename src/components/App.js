import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomeNav from './HomeNav'
import HomeBody from './HomeBody'
import HomeFooter from './HomeFooter'
import '../styles/home_body.css'
import '../styles/home_nav.css'
import '../styles/button.css'

class App extends Component {
  render () {
    return (
      <div className='home-page-wrapper'>
        {/* <Dashboard widgets={this.props.widgets} /> */}
        <HomeNav />
        <HomeBody />
        <HomeFooter />
      </div>
    )
  }
}

export default connect( state => ({ widgets: state.widgets }) )( App )
