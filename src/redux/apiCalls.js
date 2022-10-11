import { publicRequest } from "../Helpers/requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await publicRequest.post("/login", user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
