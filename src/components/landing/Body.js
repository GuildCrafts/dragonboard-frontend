import React, { Component } from 'react'

import Overlay from './Overlay'
import Quotation from './Quotation'
import Icons from './Icons'

import '../../styles/landing/body.css'

export default class Body extends Component {
  render() {
    return (
      <div className="landing-main">
        <Overlay />
        <section className="quotations">
          <div className="quotations-container">
            <Quotation quotation="I found an apple thanks to Dragonboard"
              url="/images/gravity2.png"
              name="Isaac Newton" />
            <Quotation
              quotation="We installed Dragonboard, sales are now up by 15%"
              url="images/john-adams.png"
              name="John Adamos, CEO, Adam Apples" />
          </div>
        </section>
        <Icons />
      </div>
    )
  }
}
