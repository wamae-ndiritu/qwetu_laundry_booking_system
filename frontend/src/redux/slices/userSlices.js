import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  error: null,
  userInfo: userInfoFromLocalStorage,
  students: [],
  staffs: [],
  deleted: false,
  updated: false,
  created: false,
  stats: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    clearUserState: (state) => {
      state.userInfo = null;
    },
    userActionStart: (state) => {
      state.loading = true;
      state.error = null;
      state.deleted = false;
      state.updated = false;
      state.created = false;
    },
    userActionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetUserState: (state) => {
      state.deleted = false;
      state.error = null;
      state.updated = false;
      state.created = false;
    },
    registerUserSuccess: (state, action) => {
      state.loading = false;
      state.created = true;
      state.userInfo = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      const updated_fields = action.payload;
      state.userInfo = { ...state.userInfo, user: updated_fields };
      state.updated = true;
    },
    deleteUserSuccess: (state) => {
        state.loading = false;
        state.deleted = true;
    },
    getStudentsSuccess: (state, action) => {
      state.loading = false;
      state.students = action.payload;
    },
    getStaffsSuccess: (state, action) => {
      state.loading = false;
      state.staffs = action.payload;
    },
    getStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload;
    }
  },
});

export const {
  userActionStart,
  userActionFail,
  userLoginSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  clearUserState,
  resetUserState,
  registerUserSuccess,
  getStudentsSuccess,
  getStatsSuccess,
  getStaffsSuccess
} = userSlice.actions;

export default userSlice.reducer;
