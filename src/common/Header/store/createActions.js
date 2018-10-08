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
const changeList = (data) => {
  console.log(data, 'changeList')
  return {
    type: actionTypes.CHAGNE_LIST,
    data: fromJS(data)
  }
}
const getList = () => {
  return (dispatch) => {
    console.log(8888)
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch((error) => {

    })
  }
}


export {
  searchFoucusAction,
  searchBlurAction,
  getList
}