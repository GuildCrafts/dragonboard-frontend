import React, { Component } from 'react'

import '../../../styles/account/details/subscribe.css'

export default class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <div className="form--label">
          Dragonboard Newsletter
        </div>
        <div className="check-wrapper">
          <div className="checkbox" />
          <div className="subscribe-words">
            Subscribe me to the newsletter
          </div>
        </div>
      </div>
    )
  }
}
