import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});
