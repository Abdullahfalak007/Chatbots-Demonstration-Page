import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchCharts = createAsyncThunk("charts/get", async (data) => {
  try {
    const response = await userAPI.charts();
    // console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
});
