import { combineReducers } from 'redux'

import widgets from './widgets'
import form from './form'

const reducer = combineReducers({
  widgets,
  form
})

export default reducer
