import React, { Component } from 'react'

import Menu from './Menu'

import '../../../styles/landing/navigation/button.css'

export default class Button extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      isOpen: false
    }
  }

  toggleMenu( event ) {
    this.setState( { isOpen: !this.state.isOpen } )
  }

  onClose() {
    this.setState( { isOpen: false } )
  }

  componentDidMount() {
    document.body.addEventListener( 'click', this.onClose.bind( this ) )
  }

  componentWillUnmount() {
    document.body.removeEventListener( 'click', this.onClose.bind( this ) )
  }

  render() {
    return (
      <div>
        <a onClick={ this.toggleMenu.bind( this ) } href='#'>More
          <div className='more-triangle' />
        </a>
        <Menu isOpen={ this.state.isOpen } />
      </div>
    )
  }
}
