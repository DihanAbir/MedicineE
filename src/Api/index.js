import axios from "axios";

//const API = axios.create({ baseURL: 'http://localhost:4000' })
const API = axios.create({
  baseURL: "https://e-pharmacy-by-triggermindscape.herokuapp.com",
});

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  if (token) {
    req.headers.Authorization = `bearer ${token}`;
  }
  return req;
});

//auth
export const createUserApi = (formData) => API.post(`/auth/signup`, formData);
export const loginUserApi = (formData) => API.post(`/auth/login`, formData);

//vendor auth
export const createVendorApi = (formData) =>
  API.post(`/vendor/auth/signup`, formData);
export const loginVendorApi = (formData) =>
  API.post(`/vendor/auth/login`, formData);

//Shop
export const getAllShopApi = () => API.get(`/shop/get/all`);
export const getSingleShopApi = (vendorId) => API.get(`/shop/get/${vendorId}`);

//Category
export const createCategoryApi = (formData) =>
  API.post(`/category/add`, formData);
export const getSingleShopCategoryApi = (vendorId) =>
  API.get(`/category/get/${vendorId}`);

//product
export const createProductApi = (formData) =>
  API.post(`/product/add`, formData);
export const getSingleShopProductApi = (vendorId) =>
  API.get(`/product/get/${vendorId}`);
export const getSingleProductApi = (productId) =>
  API.get(`/product/single/get/${productId}`);

//product
export const placeOrderApi = (formData) =>
  API.post(`/order/add`, formData);

