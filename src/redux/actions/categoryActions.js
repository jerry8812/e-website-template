import { ActionTypes } from "../actionTypes/actionTypes";

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories
  }
}