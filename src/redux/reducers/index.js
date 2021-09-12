import { combineReducers } from 'redux'
import { categoryReducer } from './categoryReducer'

const reducers = combineReducers({
  allCategories: categoryReducer
}) 

export default reducers