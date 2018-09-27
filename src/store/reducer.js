import { combineReducers } from 'redux-immutable'

import { reducer as headerReucer } from '../common/Header/store'
const reducer = combineReducers({
  header: headerReucer
})


export default reducer