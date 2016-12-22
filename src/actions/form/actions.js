import { FORM_FIELD_UPDATE, FORM_RESET } from './constants'

const formFieldUpdate = ( name, value ) => ({
  type: FORM_FIELD_UPDATE,
  name,
  value
})

const formReset = () =>
  ({ type: FORM_RESET })

export {
  formFieldUpdate,
  formReset
}
