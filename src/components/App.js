import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dashboard from './Dashboard'
import '../styles/home_body.css'
import '../styles/home_nav.css'
import '../styles/button.css'

class App extends Component {
  render () {
    return (
<<<<<<< HEAD
      <div className='home-page-wrapper'>
        <Dashboard/>
        <HomeNav />
        <HomeBody />
        <HomeFooter />
=======
      <div className="home-page">
        <Dashboard widgets={this.props.widgets} />
>>>>>>> c8776e9... refactored redux, took state out of clock component and mapStateToProps
      </div>
    )
  }
}

export default connect( state => ({ widgets: state.widgets }) )( App )
