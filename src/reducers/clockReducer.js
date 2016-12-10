import { CLOCK_TICK } from '../actions/clock'

export default function clockReducer( state={}, action ){
  console.log('clockReducer ->', state, action)
  switch( action.type ) {
    case CLOCK_TICK:
      return clockTicked( state, action )
    default:
      return state
  }
}


const clockTicked = ( state, action ) => {
  const { time } = action

  const index = state.widgets.findIndex( w => w.type === 'Clock' )

  const widgetCopy = Object.assign( {}, state.widgets[ index ] )
  widgetCopy.data = {
    time: time.format( 'h:mm' ),
    meridian: time.format( 'A' ),
    dayOfWeek: time.format( 'dddd'),
    date: time.format( 'D MMM YYYY' )
  }

  return Object.assign(
    {},
    state,
    {
      widgets: [
        ...state.widgets.slice( 0, index ),
        widgetCopy,
        ...state.widgets.slice( index + 1 )
      ]
    }
  )
}
