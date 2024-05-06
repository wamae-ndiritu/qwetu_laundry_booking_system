import { BASE_URL } from "../../URL";
import axios from "redaxios";
import { logout } from "./userActions";
import { createScheduleSuccess, deleteScheduleSuccess, getSchedulesSuccess, scheduleActionFail, scheduleActionStart } from "../slices/scheduleSlices";

// Create Schedule
export const createSchedule = (serviceInfo) => async (dispatch, getState) => {
  try {
    dispatch(scheduleActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    await axios.post(`${BASE_URL}/schedules/create/`, serviceInfo, config);
    dispatch(createScheduleSuccess());
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
      dispatch(scheduleActionFail("Your session has expired"));
    } else {
      dispatch(scheduleActionFail(errMsg));
    }
  }
};

//  List schedules
export const listSchedules = () => async (dispatch, getState) => {
  try {
    dispatch(scheduleActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/schedules/`, config);
    dispatch(getSchedulesSuccess(data));
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
      dispatch(scheduleActionFail("Your session has expired"));
    } else {
      dispatch(scheduleActionFail(errMsg));
    }
  }
};

// Delete schedule
export const deleteSchedule = (scheduleId) => async (dispatch, getState) => {
  try {
    dispatch(scheduleActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    await axios.delete(`${BASE_URL}/schedules/${scheduleId}/delete/`, config);
    dispatch(deleteScheduleSuccess());
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
      dispatch(scheduleActionFail("Your session has expired"));
    } else {
      dispatch(scheduleActionFail(errMsg));
    }
  }
};
