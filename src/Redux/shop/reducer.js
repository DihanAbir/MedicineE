import { GET_ALL_SHOP, GET_SINGLE_SHOP } from "./actions";

const initialState = {
  allShop:[],
  singleShop:{}
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SHOP:
      return { ...state, allShop: action.payload };

    case GET_SINGLE_SHOP:
      return { ...state, singleShop: action.payload };

    default:
      return state;
  }
}
