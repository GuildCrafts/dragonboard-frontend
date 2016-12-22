import { FORM_FIELD_UPDATE, FORM_RESET } from '../../actions/form/constants'
import formFieldUpdate from './formReducer'

const initialState = {
  values: {}
}

const formReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case FORM_RESET:
      return initialState
    case FORM_FIELD_UPDATE:
      return formFieldUpdate( state, action )
    default:
      return state
  }
}

export default formReducer
