import React, { Component } from 'react'

import "../../../styles/dashboard/widget/widget.css"

export default class Header extends Component {
  static propTypes = { title: React.PropTypes.string.isRequired }

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
