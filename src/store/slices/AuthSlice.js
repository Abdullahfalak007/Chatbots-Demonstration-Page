// src/store/slices/AuthSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchSignup } from "../thunks/AuthThunk";

export const getAuthSlice = createSlice({
  name: "auth",
  initialState: {
    identifier: null,
    role: "admin",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignup.fulfilled, (state, action) => {
        state.identifier = action.payload;
        state.status = "succeeded";
        state.role = action.payload.role;
        state.error = null;
      })
      .addCase(fetchSignup.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchSignup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.identifier = action.payload;
        state.status = "succeeded";
        state.role = action.payload.role;
        state.error = null;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default getAuthSlice.reducer;
