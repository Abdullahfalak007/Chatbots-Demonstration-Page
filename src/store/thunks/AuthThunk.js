// src/store/thunks/AuthThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit"; // Make sure this import is at the top
import { userAPI } from "../../api/ApiPool";

export const fetchSignup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await userAPI.signup(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await userAPI.login(data);
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
