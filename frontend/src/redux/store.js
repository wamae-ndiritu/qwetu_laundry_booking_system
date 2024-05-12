import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
import serviceReducer from "./slices/serviceSlice";
import scheduleReducer from "./slices/scheduleSlices";
import bookingReducer from "./slices/bookingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    service: serviceReducer,
    schedule: scheduleReducer,
    booking: bookingReducer,
  },
});
