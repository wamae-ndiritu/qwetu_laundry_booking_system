import { BASE_URL } from "../../URL";
import { bookingActionFail, bookingActionStart, createBookingSuccess, getBookingSuccess, getMyBookingSuccess } from "../slices/bookingSlice";
import axios from 'redaxios'
import { logout } from "./userActions";


// Create Booking
export const createBooking = (bookingInfo) => async (dispatch, getState) => {
  try {
    dispatch(bookingActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    await axios.post(`${BASE_URL}/bookings/new/`, bookingInfo, config);
    dispatch(createBookingSuccess());
  } catch (err) {
    console.log(err)
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
      dispatch(bookingActionFail("Your session has expired"));
    } else {
      dispatch(bookingActionFail(errMsg));
    }
  }
};


// List all bookings
export const listBookings = (searchId="") => async (dispatch, getState) => {
  try {
    dispatch(bookingActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const {data} = await axios.get(`${BASE_URL}/bookings/?search_id=${searchId}`, config);
    dispatch(getBookingSuccess(data));
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
      dispatch(bookingActionFail("Your session has expired"));
    } else {
      dispatch(bookingActionFail(errMsg));
    }
  }
};

// List User Bookings
export const listUserBookings = (userId) => async (dispatch, getState) => {
  try {
    dispatch(bookingActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/users/${userId}/bookings/`, config);
    dispatch(getMyBookingSuccess(data));
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
      dispatch(bookingActionFail("Your session has expired"));
    } else {
      dispatch(bookingActionFail(errMsg));
    }
  }
};