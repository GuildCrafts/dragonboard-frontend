import React, { Component } from 'react'
import NavDropdownMenu from './NavDropdownMenu'
import HomeNavHamburger from './HomeNavHamburger'
import '../styles/home_nav.css'

class HomeNav extends Component {
  render () {
    return (
      <nav className='home-nav clearfix'>
        <div className='nav-container'>
          <div className='home-nav-left'>
            <a className='logo' href='#'>
              <div className='logo-green-square'>
                <div>D</div>
              </div>
              <img src='/images/logo.svg' role='presentation' />
            </a>
          </div>

          <div className='home-nav-right'>
            <div className='home-nav-menu'>
              <a className='home-nav-grey' href='#'>product</a>
              <a className='home-nav-grey' href='#'>PRICING</a>
              <a className='home-nav-grey' href='#'>BLOG</a>
              <div className='nav-dropdown'>
                <NavMenuDropdownButton />
              </div>
              <a className='login-nav' href='#'>LOGIN</a>
              <a className='demo-button' href='#'>BOOK A DEMO</a>
              <input className='trial-input' type='text' placeholder='Email address' />
              <a className='nav-trial-button' href='#'>Free Trial</a>
            </div>
          </div>
          <HomeNavHamburger />
        </div>
      </nav>
    )
  }
}

const NavMenuDropdownButton = React.createClass({
  getInitialState () {
    return {
      isOpen: false
    }
  },

  toggleMenu (event) {
    // event.stopPropagation()
    this.setState({isOpen: !this.state.isOpen})
  },

  onClose () {
    this.setState({isOpen: false})
  },

  componentDidMount () {
    document.body.addEventListener('click', this.onClose)
  },

  componentWillUnmount () {
    document.body.removeEventListener('click', this.onClose)
  },

  render () {
    return <div>
      <a onClick={this.toggleMenu} href='#'>More
          <div className='more-triangle' />
      </a>
      <NavDropdownMenu isOpen={this.state.isOpen} />
    </div>
  }
})

export default HomeNav
