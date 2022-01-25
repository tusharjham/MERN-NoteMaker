import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "./actionTypes";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/userLogin",
      { email, password },
      config
    );
    dispatch(loginSuccess(data));
  } catch (error) {
    const err = error.response.data;
    dispatch(loginFail(err));
  }
};

export function loginStart() {
  return { type: LOGIN_START };
}
export function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, data };
}
export function loginFail(err) {
  return { type: LOGIN_FAIL, err };
}

export function signupStart() {
  return { type: SIGNUP_START };
}
export function signupSuccess(data) {
  return { type: SIGNUP_SUCCESS, data };
}
export function signupFail(err) {
  return { type: SIGNUP_FAIL, err };
}
export const signup =
  (name, email, password, confirmPassword) => async (dispatch) => {
    dispatch(signupStart());
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/userregister",
        { name, email, password },
        config
      );
      dispatch(signupSuccess(data));
    } catch (err) {
      dispatch(signupFail(err.response.data));
    }
  };