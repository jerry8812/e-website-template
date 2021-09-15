import { combineReducers } from 'redux'
import { categoryReducer } from './categoryReducer'
import { productsReducer } from './productsReducer'

const reducers = combineReducers({
  allCategories: categoryReducer,
  allProducts: productsReducer
}) 

export default reducers