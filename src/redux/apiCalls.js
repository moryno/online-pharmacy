import { authUserRequest, publicRequest } from "../Helpers/requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await publicRequest.post("/login", user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const { data } = await publicRequest.get("/products");
    dispatch(getProductSuccess(data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
