import { configureStore } from "@reduxjs/toolkit";
import recruitementSlice from "./slices/recruitementSlice";

export const store = configureStore({
  reducer: {
    recruitement: recruitementSlice,
  },
});
