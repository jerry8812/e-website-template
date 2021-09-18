import { ActionTypes } from "../actionTypes/actionTypes";

const initialProducts = {
  products: []
}

export const productsReducer = (state = initialProducts, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_ALL_PRODUCTS:
      return {...state, products: payload}
    default:
      return state;
  }
}

export const productTypeReducer = (state= {productType: 'all'}, {type, payload}) =>{
  switch (type) {
    case ActionTypes.SET_PRODUCT_TYPE:
      return {...state, productType: payload}
    default:
      return state
  }
}