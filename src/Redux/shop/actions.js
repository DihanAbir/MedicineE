import { getAllShopApi, getSingleShopApi } from "../../Api";

export const GET_ALL_SHOP = "GET_ALL_SHOP";
export const GET_SINGLE_SHOP = "GET_SINGLE_SHOP";

export const getAllShop = () => async (dispatch) => {
  try {
    const { data } = await getAllShopApi();
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: GET_ALL_SHOP, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const getSingleShop = (vendorId) => async (dispatch) => {
  try {
    const { data } = await getSingleShopApi(vendorId);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: GET_SINGLE_SHOP, payload: data });

  } catch (error) {
    console.log(error);
  }
};
