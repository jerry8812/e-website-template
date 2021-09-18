import fakeApi from '@/apis/fakeApi'
import { ActionTypes } from "../actionTypes/actionTypes";

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories
  }
}

export const fetchCategories = () => async (dispatch) => {
  const response = await fakeApi.get("/products/categories")
  dispatch(setCategories(response.data))
}