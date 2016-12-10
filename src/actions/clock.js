export const CLOCK_TICK = 'clock_tick'

const clockTick = time => ({ type: CLOCK_TICK, time })

export default {
  clockTick
}
