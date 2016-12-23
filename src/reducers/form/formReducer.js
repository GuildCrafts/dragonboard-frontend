const formFieldUpdate = ( state, action ) => {
  return Object.assign({}, state, {
    values: Object.assign({}, state.values, {
      [ action.name ]: action.value
    })
  })
}

export default formFieldUpdate
