import {
  userActionStart,
  userActionFail,
  userLoginSuccess,
  clearUserState,
  deleteUserSuccess,
  updateUserSuccess,
  registerUserSuccess,
} from "../slices/userSlices";
import axios from "redaxios";
import { BASE_URL } from "../../URL";

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch(userActionStart());

    const { data } = await axios.post(`${BASE_URL}/users/register/`, userData);

    dispatch(registerUserSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    const errMsg = err?.data
      ? err.data.message
        ? err.data.message : err.data["email"] || err.data["email"]
      : err.statusText;
    dispatch(userActionFail(errMsg));
  }
};


// Login 
export const login = (userData) => async (dispatch) => {
  try {
    dispatch(userActionStart());

    const { data } = await axios.post(`${BASE_URL}/users/login/`, userData);

    dispatch(userLoginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    const errMsg = err?.data ? err.data.message : err.statusText;
    dispatch(userActionFail(errMsg));
  }
};

export const logout = () => (dispatch) => {
  dispatch(clearUserState());
  localStorage.removeItem("userInfo");
};


// Update user
export const updateUser = (userId, form) => async (dispatch, getState) => {
  try {
    dispatch(userActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const {data} = await axios.patch(`${BASE_URL}/users/${userId}/update/`, form, config);
    dispatch(updateUserSuccess(data));
  } catch (err) {
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(userActionFail("Your session has expired"));
    } else {
      dispatch(userActionFail(errMsg));
    }
  }
};



// Delete user
export const deleteUser = (userId) => async (dispatch, getState) => {
  try {
    dispatch(userActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    await axios.delete(`${BASE_URL}/users/${userId}/delete/`, config);
    dispatch(deleteUserSuccess());
  } catch (err) {
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(userActionFail("Your session has expired"));
    } else {
      dispatch(userActionFail(errMsg));
    }
  }
};
