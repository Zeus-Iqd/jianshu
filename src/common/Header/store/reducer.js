import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultstate = fromJS({
  focused: true,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultstate, action) => {
  switch (action.type) {
    case actionTypes.CHAGNE_LIST:
    // state.merge可以弄多个set
      return state.set('list', action.data).set('totalPage', action.totalPage)
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', true)
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}