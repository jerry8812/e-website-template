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