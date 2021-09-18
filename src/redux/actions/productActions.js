import fakeApi from "@/apis/fakeApi";
import { ActionTypes } from "../actionTypes/actionTypes";

export const setAllProducts = (products) => {
  return {
    type: ActionTypes.SET_ALL_PRODUCTS,
    payload: products
  }
}

export const fetchProducts = (productType) => async (dispatch) => {
  const response = await fakeApi.get(productType)
  dispatch(setAllProducts(response.data))
}

export const setProductType = (productType) => {
  return {
    type: ActionTypes.SET_PRODUCT_TYPE,
    payload: productType
  }
}