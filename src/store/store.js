import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/todoSlice"
// import {fetchTrackingNumbers} from "../features/apiSlice.ts";
import rootReducer from "./rootReducer.js";
export const store = configureStore({
  reducer: rootReducer,
});
