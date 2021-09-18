import { combineReducers } from 'redux'
import { categoryReducer } from './categoryReducer'
import { productsReducer, productTypeReducer } from './productsReducer'

const reducers = combineReducers({
  allCategories: categoryReducer,
  allProducts: productsReducer,
  productType: productTypeReducer,
}) 

export default reducers