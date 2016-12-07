import React, { Component } from 'react'
import "../../styles/widget.css"
import moment from 'moment'

class Clock extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      time: null,
      amPm: null,
      dayOfWeek: null,
      date: null
    }

    this.setDateAndTime = this.setDateAndTime.bind(this)
  }

  setDateAndTime() {
    let currentTime = moment().format( 'h:mm' )
    let currentAmPm = moment().format( 'A' )
    let currentDayOfWeek = moment().format( 'dddd' )
    let currentDate = moment().format( 'D MMM YYYY' )

    this.setState({
      time: currentTime,
      amPm: currentAmPm,
      dayOfWeek: currentDayOfWeek,
      date: currentDate
    })
  }

  componentWillMount() {
    this.setDateAndTime()
  }

  componentDidMount() {
    window.setInterval( function () {
      this.setDateAndTime()
    }.bind( this ), 10000)
  }

  render() {
    const { specification } = this.props

    const positionStyle = { top: specification.position.x, left: specification.position.y }
    return (
      <article>
        <div className="widget widget-width-1 widget-height-1" style={ positionStyle }>
          <header>
            <span>
              <label className="header-text">
                { specification.title }
              </label>
            </span>
          </header>
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

export default Clock
