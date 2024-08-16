// import { createSlice } from "@reduxjs/toolkit";
// import { fetchKnowledgebase } from "../thunks/knowledgebaseThunk";

// export const getKnowledgebaseSlice = createSlice({
//   name: "knowledgebase",
//   initialState: {
//     identifier: null,
//     status: "idle",
//   },
//   reducers: {
//     // Define standard reducer logic for proxy groups, if needed
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchKnowledgebase.fulfilled, (state, action) => {
//       state.identifier = action.payload;
//       state.status = "succeeded";
//     });
//     builder.addCase(fetchKnowledgebase.pending, (state) => {
//       state.status = "pending";
//     });
//     builder.addCase(fetchKnowledgebase.rejected, (state) => {
//       state.status = "failed";
//     });
//   },
// });

import { createSlice } from "@reduxjs/toolkit";
import { fetchKnowledgebase } from "../thunks/knowledgebaseThunk";

export const getKnowledgebaseSlice = createSlice({
  name: "knowledgebase",
  initialState: {
    identifier: null,
    status: "idle",
  },
  reducers: {
    // Define standard reducer logic for proxy groups, if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchKnowledgebase.fulfilled, (state, action) => {
      state.identifier = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchKnowledgebase.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchKnowledgebase.rejected, (state) => {
      state.status = "failed";
    });
  },
});
