import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  error: null,
  userInfo: userInfoFromLocalStorage,
  students: [],
  deleted: false,
  updated: false,
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
    },
    userActionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetUserState: (state) => {
      state.deleted = false;
      state.error = null;
      state.updated = false;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      const contact = action.payload.contact;
      state.userInfo = { ...state.userInfo, contact };
      state.updated = true;
    },
    deleteUserSuccess: (state) => {
        state.loading = false;
        state.deleted = true;
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
  resetUserState
} = userSlice.actions;

export default userSlice.reducer;
