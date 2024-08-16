import { createSlice } from "@reduxjs/toolkit";
import { fetchCharts } from "../thunks/chartsThunk";

export const getChartsSlice = createSlice({
  name: "charts",
  initialState: {
    identifier: null,
    status: "idle",
  },
  reducers: {
    // Define standard reducer logic for proxy groups, if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharts.fulfilled, (state, action) => {
      state.identifier = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchCharts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchCharts.rejected, (state) => {
      state.status = "failed";
    });
  },
});
