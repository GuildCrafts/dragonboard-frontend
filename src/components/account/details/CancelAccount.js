import React, { Component } from 'react'

import '../../../styles/account/details/cancel_account.css'

export default class CancelAccount extends Component {
  render() {
    return (
      <div className="cancel-account">
        <div className="form--label">
          Cancellation
        </div>
        <div className="cancel-words">
          <a href="">Close this account</a>.
          This will delete all your settings and data.
        </div>
      </div>
    )
  }
}
