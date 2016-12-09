import React, { Component } from 'react'
import '../../styles/widget/widget.css'

class Header extends Component {
  constructor( props ) {
    super( props )
    this.propTypes = { title: React.PropTypes.string.isRequired }
  }

  render() {
    const { title } = this.props

    return (
      <header>
        <span>
          <label className="header-text"> { title } </label>
        </span>
      </header>
    )
  }
}

export default Header
