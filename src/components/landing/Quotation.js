import React, { Component } from 'react'

import '../../styles/landing/quotation.css'

export default class Quotation extends Component {
  render() {
    return (
      <div className='customer-blockquotation'>
        <p className='customer-testimonial'>
          { this.props.quotation }
        </p>
        <div className='inner'>
          <img src={ this.props.url } role='presentation' />
          <cite>{ this.props.name }</cite>
        </div>
      </div>
    )
  }
}
