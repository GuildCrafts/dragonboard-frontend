import { TOGGLE_EDIT } from '../actions/account_details'

const initialState = {
  generalInformation: {
    editing: false
  }
}

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case TOGGLE_EDIT:
      return Object.assign({}, state, {
        generalInformation: {
          editing: !state.generalInformation.editing
        }
      })
    default:
      return state
  }
}
