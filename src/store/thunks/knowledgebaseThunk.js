// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { userAPI } from "../../api/ApiPool";

// export const fetchKnowledgebase = createAsyncThunk(
//   "knowledgebase/get",
//   async (data) => {
//     try {
//       const response = await userAPI.knowledgebase();
//       // console.log(response.data)
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchKnowledgebase = createAsyncThunk(
  "knowledgebase/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userAPI.getKnowledgebase();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

export const createKnowledgebase = createAsyncThunk(
  "knowledgebase/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await userAPI.postKnowledgebase(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

export const updateKnowledgebase = createAsyncThunk(
  "knowledgebase/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await userAPI.putKnowledgebase(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

export const deleteKnowledgebase = createAsyncThunk(
  "knowledgebase/delete",
  async (id, { rejectWithValue }) => {
    try {
      await userAPI.deleteKnowledgebase(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);
