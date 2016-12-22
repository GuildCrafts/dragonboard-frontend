import { combineReducers } from 'redux'

import widgets from './widgets'
import accountDetails from './account_details'

const reducer = combineReducers({
  widgets,
  accountDetails
})

export default reducer
