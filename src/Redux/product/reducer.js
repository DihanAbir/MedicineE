import {
  CREATE_PRODUCT,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_SHOP_PRODUCTS,
} from "./actions";

const initialState = {
  allProduct: [],
  singleProduct: {},
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        allProduct: [action.payload, ...state.allProduct],
      };

    case GET_SINGLE_SHOP_PRODUCTS:
      return {
        ...state,
        allProduct: action.payload,
      };

    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
}
