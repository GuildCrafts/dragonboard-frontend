import React, { Component } from 'react'
import NavMenu from './NavMenu'
import '../styles/nav_menu_button.css'

class NavMenuButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  toggleMenu (event) {
    // event.stopPropagation()
    this.setState({isOpen: !this.state.isOpen})
  }

  onClose () {
    this.setState({isOpen: false})
  }

  componentDidMount () {
    document.body.addEventListener('click', this.onClose)
  }

  componentWillUnmount () {
    document.body.removeEventListener('click', this.onClose)
  }

  render () {
    return <div>
      <a onClick={this.toggleMenu} href='#'>More
          <div className='more-triangle' />
      </a>
      <NavMenu isOpen={this.state.isOpen} />
    </div>
  }
}

export default NavMenuButton
