import { CLOCK_TICK } from './constants'

const clockTick = time => ({ type: CLOCK_TICK, time })

export { clockTick }
