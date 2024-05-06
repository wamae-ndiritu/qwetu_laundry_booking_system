import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
import serviceReducer from "./slices/serviceSlice";
import scheduleReducer from "./slices/scheduleSlices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    service: serviceReducer,
    schedule: scheduleReducer,
  },
});
