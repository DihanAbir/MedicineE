import { createUserApi, createVendorApi, loginUserApi } from "../../Api";
import { showNotification } from "../notification/actions";

export const Add_USER = "Add_USER";
export const LOGOUT = "LOGOUT";

export const createAccount = (formData, history) => async (dispatch) => {
  try {
    const { data } = await createUserApi(formData);
    dispatch({ type: Add_USER, payload: data });
    dispatch(showNotification("success", "Account created successfully"));
  } catch (error) {
    console.log(error?.message);
    dispatch(showNotification("error", error?.response?.data?.message));
    console.log(error);
  }
};

export const createVendorAccount = (formData, history) => async (dispatch) => {
  try {
    const { data } = await createVendorApi(formData);
    console.log(
      "🚀 ~ file: actions.js ~ line 10 ~ createVendorAccount ~ data",
      data
    );
    dispatch({ type: Add_USER, payload: data });
    dispatch(showNotification("success", "Account created successfully"));
  } catch (error) {
    console.log(error?.message);
    dispatch(showNotification("error", error?.response?.data?.message));
    console.log(error);
  }
};

export const loginAccount = (formData, history) => async (dispatch) => {
  try {
    const { data } = await loginUserApi(formData);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: Add_USER, payload: data });
    dispatch(
      showNotification(
        "success",
        `welcome ${data.userInfo ? data.userInfo.name : data.vendorInfo.name}`
      )
    );
  } catch (error) {
    dispatch(showNotification("error", error?.response?.data?.message));
  }
};

export const logOut = () => async (dispatch) => {
  localStorage.setItem("profile", "null");
  dispatch(showNotification("success", "Log Out Successful"));
  dispatch({
    type: LOGOUT,
    payload: {
      token: null,
      userInfo: {
        id: "",
        name: "",
        email: "",
        isAdmin: false,
      },
    },
  });
};
