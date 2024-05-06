import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  schedules: [],
  deleted: false,
  created: false,
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    scheduleActionStart: (state) => {
      state.loading = true;
      state.error = null;
      state.deleted = false;
      state.created = false;
    },
    scheduleActionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetScheduleState: (state) => {
      state.deleted = false;
      state.error = null;
    },
    createScheduleSuccess: (state) => {
      state.loading = false;
      state.created = true;
    },
    getSchedulesSuccess: (state, action) => {
      state.loading = false;
      state.schedules = action.payload;
    },
    deleteSchedulesSuccess: (state) => {
      state.loading = false;
      state.deleted = true;
    },
  },
});

export const {
  scheduleActionStart,
  scheduleActionFail,
  createScheduleSuccess,
  getSchedulesSuccess,
  deleteScheduleSuccess,
  resetScheduleState,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
