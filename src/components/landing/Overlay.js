import React, { Component } from 'react'

import '../../styles/landing/overlay.css'

export default class Overlay extends Component {
  render() {
    return (
      <section className='overlay-container'>
        <div className='overlay-image' role='presentation'>
          <div className='overlay-header'>
            <div className='overlay-header-text'>
              <h1 className='overlay-heading'>LIVE TV DASHBOARD SOFTWARE</h1>
              <div className='overlay-message'>
                Focus your teams and improve your KPIs
              </div>
            </div>

            <div className='overlay-buttons'>
              <a href='#' className='flat-button trial-button'>
                Start your free trial
              </a>
              <a href='#' className='flat-button demonstration-button'>Book a demo</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
