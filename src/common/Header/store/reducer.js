import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultstate = fromJS({
  focused: false,
  list: []
})

export default (state = defaultstate, action) => {
  switch (action.type) {
    case actionTypes.CHAGNE_LIST:
      return state.set('list', action.data)
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    default:
      return state
  }
}