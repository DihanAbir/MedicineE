import { CREATE_CATEGORY, GET_SINGLE_SHOP_CATEGORY } from "./actions";

const initialState = [];

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_SHOP_CATEGORY:
      return action.payload;

    case CREATE_CATEGORY:
      return [action.payload, ...state];

    default:
      return state;
  }
}
