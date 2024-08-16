// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { userAPI } from "../../api/ApiPool";

// export const fetchClients = createAsyncThunk(
//   "clients/fetchClients",
//   async () => {
//     const response = await userAPI.clients();
//     return response.data;
//   }
// );

// export const addClient = createAsyncThunk(
//   "clients/addClient",
//   async (clientData, { getState }) => {
//     const state = getState();
//     const clients = state.clients.identifier;
//     const maxId =
//       clients.length > 0
//         ? Math.max(...clients.map((client) => parseInt(client.id)))
//         : 0;
//     const newId = (maxId + 1).toString(); // Ensure the ID is a string
//     const newClientData = { ...clientData, id: newId };

//     const response = await userAPI.addClient(newClientData);
//     return response.data;
//   }
// );

// export const updateClient = createAsyncThunk(
//   "clients/updateClient",
//   async ({ id, data }) => {
//     const response = await userAPI.updateClient(id, data);
//     return response.data;
//   }
// );

// export const deleteClient = createAsyncThunk(
//   "clients/deleteClient",
//   async (id) => {
//     await userAPI.deleteClient(id);
//     return id;
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async () => {
    const response = await userAPI.clients();
    return response.data;
  }
);

export const addClient = createAsyncThunk(
  "clients/addClient",
  async (clientData) => {
    const response = await userAPI.addClient(clientData);
    return response.data;
  }
);

export const updateClient = createAsyncThunk(
  "clients/updateClient",
  async ({ id, data }) => {
    const response = await userAPI.updateClient(id, data);
    return response.data;
  }
);

export const deleteClient = createAsyncThunk(
  "clients/deleteClient",
  async (id) => {
    await userAPI.deleteClient(id);
    return id;
  }
);
