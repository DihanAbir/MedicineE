import { createOrderApi, getSingleShopOrderApi } from "../../Api";
import { showNotification } from "../notification/actions";

export const CREATE_ORDER = "CREATE_ORDER";
export const GET_CURRENT_ORDERS = "GET_CURRENT_ORDERS";
export const GET_PRIVIES_ORDERS = "GET_PRIVIES_ORDERS";


export const createOrder =
  (formData, setNewOrder) => async (dispatch) => {
    try {
      const { data } = await createOrderApi(formData);
      console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
      dispatch({ type: CREATE_ORDER, payload: data });
      setNewOrder(false);
      dispatch(
        showNotification("success", "New Order Created Successfully")
      );
    } catch (error) {
      console.log(error);
      dispatch(showNotification("error", error?.response?.data?.message));
    }
  };

export const getSingleShopOrder = (vendorId) => async (dispatch) => {
  try {
    const { data } = await getSingleShopOrderApi(vendorId);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: GET_SINGLE_SHOP_CATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
