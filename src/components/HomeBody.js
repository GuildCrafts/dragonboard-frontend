import React, { Component } from 'react'
import '../styles/home_body.css'
import Overlay from './Overlay'
import Quote from './Quote'
import Icons from './Icons'

class HomeBody extends Component {
  render () {
    return (
      <div className="home-main">
        <Overlay/>
        <Quote/>
        <Icons/>
      </div>
    )
  }
}

export default HomeBody
