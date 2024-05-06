import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
import serviceReducer from "./slices/serviceSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    service: serviceReducer,
  },
});
