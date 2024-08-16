import { createSlice } from "@reduxjs/toolkit";
import {
  fetchVirtualAssistants,
  addVirtualAssistant,
  updateVirtualAssistant,
  deleteVirtualAssistant,
} from "../thunks/virtualAssistantsThunk";

const virtualAssistantsSlice = createSlice({
  name: "virtualAssistants",
  initialState: {
    identifier: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVirtualAssistants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVirtualAssistants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.identifier = action.payload;
      })
      .addCase(fetchVirtualAssistants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addVirtualAssistant.fulfilled, (state, action) => {
        state.identifier.push(action.payload);
      })
      .addCase(updateVirtualAssistant.fulfilled, (state, action) => {
        const index = state.identifier.findIndex(
          (assistant) => assistant.id === action.payload.id
        );
        if (index !== -1) {
          state.identifier[index] = action.payload;
        }
      })
      .addCase(deleteVirtualAssistant.fulfilled, (state, action) => {
        state.identifier = state.identifier.filter(
          (assistant) => assistant.id !== action.payload
        );
      });
  },
});

export const getVirtualAssistantsSlice = virtualAssistantsSlice;
export default virtualAssistantsSlice.reducer;
