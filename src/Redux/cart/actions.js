import { placeOrderApi } from "../../Api";
import { showNotification } from "../notification/actions";

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_PRODUCT = "UPDATE_CART_PRODUCT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const PLACE_ORDER = "PLACE_ORDER";

export const addInCartAction = (Product) => ({
  type: ADD_TO_CART,
  payload: Product,
});

export const updateCartProductAction = (Product) => ({
  type: UPDATE_CART_PRODUCT,
  payload: Product,
});

export const removeFromCartAction = (Product) => {
console.log("🚀 ~ file: actions.js ~ line 20 ~ removeFromCartAction ~ Product", Product)
  return {
    type: REMOVE_FROM_CART,
    payload: Product,
  };
};

export const placeOrder = (vendorId) => async (dispatch) => {
  try {
    const { data } = await placeOrderApi(vendorId);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch(showNotification("success", "New Category Created Successfully"));
    dispatch({ type: PLACE_ORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
