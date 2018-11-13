import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
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
const mouseEnter = () => {
  return {
    type: actionTypes.MOUSE_ENTER
  }
}
const changePage = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page
  }
}
const mouseLeave = () => {
  return {
    type: actionTypes.MOUSE_LEAVE
  }
}
const changeList = (data) => {
  console.log(data, 'changeList')
  return {
    type: actionTypes.CHAGNE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
}
const getList = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/headerList.json')
    const data = res.data
    dispatch(changeList(data.data))
  }
}

export {
  searchFoucusAction,
  searchBlurAction,
  getList,
  mouseEnter,
  mouseLeave,
  changePage
}