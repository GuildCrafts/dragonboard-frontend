import React, { Component } from 'react'

import '../../styles/landing/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='landing-footer-navigation-container'>
        <ul className='landing-footer-navigation'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Careers</a></li>
          <li><a href='#'>Team</a></li>
          <li><a href='#'>Partners</a></li>
          <li><a href='#'>Legal</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a className='login-navigation' href='#'>Login</a></li>
        </ul>
      </div>
    )
  }
}
