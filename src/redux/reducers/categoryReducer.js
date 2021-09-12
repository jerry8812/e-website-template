import { ActionTypes } from "../actionTypes/actionTypes";

const initialCategoryState = {
  categories: []
}
export const categoryReducer = (state=initialCategoryState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return {...state, categories: payload}
  
    default:
      return state
  }
}