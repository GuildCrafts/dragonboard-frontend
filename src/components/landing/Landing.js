import React, { Component } from 'react'

import Body from './Body'
import Navigation from './navigation/Navigation'
import Footer from './Footer'

import '../../styles/landing/body.css'
import '../../styles/landing/navigation/navigation.css'
import '../../styles/landing/button.css'

export default class Landing extends Component {
  render() {
    return (
      <div className='landing-page-wrapper'>
        <Navigation />
        <Body />
        <Footer />
      </div>
    )
  }
}
