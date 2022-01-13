import {
  createProductApi,
  getSingleProductApi,
  getSingleShopProductApi
} from "../../Api";
import { showNotification } from "../notification/actions";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_SINGLE_SHOP_PRODUCTS = "GET_SINGLE_SHOP_PRODUCTS";
export const GET_SINGLE_PRODUCT = "GET_SINGLE_SHOP_PRODUCT";

export const createProduct = (formData, closeModal) => async (dispatch) => {
  try {
    const { data } = await createProductApi(formData);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: CREATE_PRODUCT, payload: data });
    closeModal(false);
    dispatch(showNotification("success", "New product Created Successfully"));
  } catch (error) {
    console.log(error);
    dispatch(showNotification("error", error?.response?.data?.message));
  }
};

export const getSingleShopProduct = (vendorId) => async (dispatch) => {
  try {
    const { data } = await getSingleShopProductApi(vendorId);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: GET_SINGLE_SHOP_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = (productId) => async (dispatch) => {
  try {
    const { data } = await getSingleProductApi(productId);
    dispatch({ type: GET_SINGLE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
