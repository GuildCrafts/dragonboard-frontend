import React, { Component } from 'react';
import '../styles/quote.css';

class Quote extends Component {
  render () {
      return (
        <section className="quotes">
          <div className="quotes-container">
            <div className="customer-blockquote">
              <p className="customer-testimonial">
                I found an apple thanks to Dragonboard
              </p>
              <div className="inner">
                <img src="https://1.bp.blogspot.com/-vw-cIkAWfDI/TeDVgYZljYI/AAAAAAAAAAQ/TLY7IGiDC7M/s1600/gravity2.png" role="presentation"/>
                <cite>Isaac Newton</cite>
              </div>
            </div>

            <div className="customer-blockquote">
              <p className="customer-testimonial">
                We installed Dragonboard, sales are now up by 15%
              </p>
              <div className="inner">
                <img src="https://imgs-tuts-dragoart-386112.c.cdn77.org/how-to-draw-john-adams-john-adams_1_000000016809_5.png" role="presentation"/>
                <cite>John Adamos, CEO, Adam Apples</cite>
              </div>
            </div>
          </div>
        </section>
      );
  }
}

export default Quote;
