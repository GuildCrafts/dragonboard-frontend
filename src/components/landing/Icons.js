import React, { Component } from 'react'

import '../../styles/landing/icons.css'

export default class Icons extends Component {
  render() {
    return (
      <section className='icons'>
        <div className='icons-container'>
          <h2 className='section-heading'> A DASHBOARD TOOL USED BY THE FASTEST GROWING ORGANIZATIONS </h2>
          <img src='/images/ad-logos.png' role='presentation' />
        </div>
      </section>
    )
  }
}
