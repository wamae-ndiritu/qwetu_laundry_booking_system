import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  services: [],
  deleted: false,
  created: false,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    serviceActionStart: (state) => {
      state.loading = true;
      state.error = null;
      state.deleted = false;
      state.created = false;
    },
    serviceActionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetServiceState: (state) => {
      state.deleted = false;
      state.error = null;
    },
    createServiceSuccess: (state) => {
      state.loading = false;
      state.created = true;
    },
    getServicesSuccess: (state, action) => {
        state.loading = false;
        state.services = action.payload;
    },
    deleteServiceSuccess: (state) => {
      state.loading = false;
      state.deleted = true;
    },
  },
});

export const {
    serviceActionStart,
    serviceActionFail,
    createServiceSuccess,
    getServicesSuccess,
    deleteServiceSuccess,
    resetServiceState,
} = serviceSlice.actions;

export default serviceSlice.reducer;
