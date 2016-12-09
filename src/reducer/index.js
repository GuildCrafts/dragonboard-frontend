import clockTicked from './clock'
import { CLOCK_TICK } from '../actions/clock'

const root = ( state, action ) => {
  switch( action.type ) {
    case CLOCK_TICK:
      return clockTicked( state, action )
    default:
      return state
  }
}

export default root