import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  bookings: [],
  myBookings: [],
  created: false,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    bookingActionStart: (state) => {
      state.loading = true;
      state.error = null;
      state.created = false;
    },
    bookingActionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetBookingState: (state) => {
      state.deleted = false;
      state.error = null;
      state.created = false;
    },
    createBookingSuccess: (state) => {
      state.loading = false;
      state.created = true;
    },
    getBookingSuccess: (state, action) => {
      state.loading = false;
      state.bookings = action.payload;
    },
    getMyBookingSuccess: (state, action) => {
      state.loading = false;
      state.myBookings = action.payload;
    }
  },
});

export const {
    bookingActionStart,
    bookingActionFail,
    resetBookingState,
    createBookingSuccess,
    getBookingSuccess,
    getMyBookingSuccess
} = bookingSlice.actions;

export default bookingSlice.reducer;
