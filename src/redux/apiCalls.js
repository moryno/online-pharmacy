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
} from "./productSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await request.post("/login", user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
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
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await request.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
