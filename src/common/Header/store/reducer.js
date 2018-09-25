import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultstate = fromJS({
  focused: false
})

export default (state = defaultstate, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}