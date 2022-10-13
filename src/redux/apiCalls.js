import request from "../Helpers/requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} from "./productSlice";
import { setupLogin } from "../Helpers/auth.js";
import { logoutFunc } from "../Helpers/auth.js";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await request.post("/login", user);
    setupLogin(data?.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
    logoutFunc();
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const { data } = await request.get("/products");
    dispatch(getProductSuccess(data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const { data } = await request.post(`/products`, product);
    dispatch(addProductSuccess(data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await request.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id: id, product: product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await request.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
