import * as actionTypes from './actionTypes'
const searchFoucusAction = () => {
  return {
    type: actionTypes.SEARCH_FOCUS
  }
}
const searchBlurAction = () => {
  return {
    type: actionTypes.SEARCH_BLUR
  }
}


export {
  searchFoucusAction,
  searchBlurAction
}