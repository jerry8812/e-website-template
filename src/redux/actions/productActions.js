import { ActionTypes } from "../actionTypes/actionTypes";

export const setAllProducts = (products) => {
  return {
    type: ActionTypes.SET_ALL_PRODUCTS,
    payload: products
  }
}