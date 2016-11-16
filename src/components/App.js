import React, { Component } from 'react'
import '../styles/home_body.css'
import '../styles/dropdown.css'
import '../styles/home_nav.css'
import '../styles/button.css'
import HomeNav from './HomeNav'
import HomeBody from './HomeBody'
import HomeFooter from './HomeFooter'

class App extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeNav/>
        <HomeBody/>
        <HomeFooter/>
      </div>
    )
  }
}

export default App
