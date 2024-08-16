// import { createSlice } from "@reduxjs/toolkit";
// import {
//   fetchClients,
//   addClient,
//   updateClient,
//   deleteClient,
// } from "../thunks/clientsThunk";

// const clientsSlice = createSlice({
//   name: "clients",
//   initialState: {
//     identifier: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchClients.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchClients.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.identifier = action.payload;
//       })
//       .addCase(fetchClients.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(addClient.fulfilled, (state, action) => {
//         state.identifier.push(action.payload);
//       })
//       .addCase(updateClient.fulfilled, (state, action) => {
//         const index = state.identifier.findIndex(
//           (client) => client.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.identifier[index] = action.payload;
//         }
//       })
//       .addCase(deleteClient.fulfilled, (state, action) => {
//         state.identifier = state.identifier.filter(
//           (client) => client.id !== action.payload
//         );
//       });
//   },
// });

// export const getClientsSlice = clientsSlice;
// export default clientsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchClients,
  addClient,
  updateClient,
  deleteClient,
} from "../thunks/clientsThunk";

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    identifier: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.identifier = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        state.identifier.push(action.payload);
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        const index = state.identifier.findIndex(
          (client) => client.id === action.payload.id
        );
        if (index !== -1) {
          state.identifier[index] = action.payload;
        }
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.identifier = state.identifier.filter(
          (client) => client.id !== action.payload
        );
      });
  },
});

export const getClientsSlice = clientsSlice;
export default clientsSlice.reducer;
