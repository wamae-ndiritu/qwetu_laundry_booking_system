import { BASE_URL } from "../../URL";
import axios from "redaxios";
import {
  createServiceSuccess,
  deleteServiceSuccess,
  getServicesSuccess,
  serviceActionFail,
  serviceActionStart,
} from "../slices/serviceSlice";
import { logout } from "./userActions";

// Create Service
export const createService = (serviceInfo) => async (dispatch, getState) => {
  try {
    dispatch(serviceActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    await axios.post(`${BASE_URL}/services/create/`, serviceInfo, config);
    dispatch(createServiceSuccess());
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
      dispatch(serviceActionFail("Your session has expired"));
    } else {
      dispatch(serviceActionFail(errMsg));
    }
  }
};

//  List services
export const listServices = () => async (dispatch, getState) => {
  try {
    dispatch(serviceActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/services/`, config);
    dispatch(getServicesSuccess(data));
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
      dispatch(serviceActionFail("Your session has expired"));
    } else {
      dispatch(serviceActionFail(errMsg));
    }
  }
};

// Delete service
export const deleteService = (serviceId) => async (dispatch, getState) => {
  try {
    dispatch(serviceActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    await axios.delete(`${BASE_URL}/services/${serviceId}/delete/`, config);
    dispatch(deleteServiceSuccess());
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
      dispatch(serviceActionFail("Your session has expired"));
    } else {
      dispatch(serviceActionFail(errMsg));
    }
  }
};
