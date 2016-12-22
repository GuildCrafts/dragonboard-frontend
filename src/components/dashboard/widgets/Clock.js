import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { clockTick } from '../../../actions/widgets/actions'
import Header from './Header'

import '../../../styles/dashboard/widget/widget.css'
import '../../../styles/dashboard/widget/clock.css'

class Clock extends Component {
  componentWillMount() {
    this.props.clockTick()
  }

  componentDidMount() {
    window.setInterval( () => {
      this.props.clockTick()
    }, 1000 )
  }

  render() {
    const { title, x, y, data } = this.props
    const positionStyle = { top: x, left: y }
    const { time, meridian, dayOfWeek, date } = data

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1"
          style={ positionStyle }>
          <Header title={ title }/>

          <div className="time-container">

            <div className="clockface">
              { time } <sub>{ meridian }</sub>
            </div>

            <div className="date body-text">
              <div>{ dayOfWeek }</div>
              <div>{ date }</div>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    clockTick: () => dispatch( clockTick( moment() ) )
  }
)

export default connect(
  state => ({ widgets: state.widgets }), mapDispatchToProps
)( Clock )
