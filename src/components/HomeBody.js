import React, { Component } from 'react'
import Overlay from './Overlay'
import Quote from './Quote'
import Icons from './Icons'

class HomeBody extends Component {
  render() {
    return (
      <div className="home-main">
        <Overlay/>
        <section className="quotes">
          <div className="quotes-container">
            <Quote quote="I found an apple thanks to Dragonboard"
              url="https://1.bp.blogspot.com/-vw-cIkAWfDI/TeDVgYZljYI/AAAAAAAAAAQ/TLY7IGiDC7M/s1600/gravity2.png"
              name="Isaac Newton" />
            <Quote quote="We installed Dragonboard, sales are now up by 15%"
              url="https://imgs-tuts-dragoart-386112.c.cdn77.org/how-to-draw-john-adams-john-adams_1_000000016809_5.png"
              name="John Adamos, CEO, Adam Apples" />
          </div>
        </section>
        <Icons/>
      </div>
    )
  }
}

export default HomeBody
