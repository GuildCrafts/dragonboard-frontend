import React, { Component } from 'react'
import moment from 'moment'

import Header from './Header'

import "../../../styles/dashboard/widget/widget.css"
import "../../../styles/dashboard/widget/clock.css"

export default class Clock extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      time: null,
      amPm: null,
      dayOfWeek: null,
      date: null
    }
  }

  setDateAndTime() {
    const time = moment()

    this.setState({
      time: time.format( 'h:mm' ),
      amPm: time.format( 'A' ),
      dayOfWeek: time.format( 'dddd') ,
      date: time.format( 'D MMM YYYY' )
    })
  }

  componentWillMount() {
    this.setDateAndTime.bind( this )()
  }

  componentDidMount() {
    window.setInterval( this.setDateAndTime.bind( this ), 10000 )
  }

  render() {
    const { title, x, y, format } = this.props
    const positionStyle = { top: x, left: y }

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1"
          style={ positionStyle }>
          <Header title={ title }/>
          <div className="time-container">
            <div className="clockface">
              { this.state.time } <sub>{ this.state.amPm }</sub>
            </div>
            <div className="date body-text">
              <div>
                { this.state.dayOfWeek }
              </div>
              <div>
                { this.state.date }
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }
}
