// import { createSlice } from "@reduxjs/toolkit";
// import {
//   fetchChatHistory,
//   addInputMessage,
//   updateSelectedText,
// } from "../thunks/chatHistoryThunk";

// const initialState = {
//   currentFile: {
//     clientMessages: [],
//     userMessages: [],
//     aiResponses: [],
//     selectedText: null,
//   },
//   status: "idle",
// };

// export const chatHistorySlice = createSlice({
//   name: "chatHistory",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchChatHistory.fulfilled, (state, action) => {
//         const chatData = action.payload;
//         state.currentFile = {
//           ...state.currentFile,
//           clientMessages: chatData.filter((msg) => msg.sender === "Client"),
//           userMessages: chatData.filter((msg) => msg.sender === "User Name"),
//           aiResponses: [], // Depending on your logic, update this with AI responses
//         };
//         state.status = "succeeded";
//       })
//       .addCase(fetchChatHistory.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchChatHistory.rejected, (state) => {
//         state.status = "failed";
//       })
//       .addCase(addInputMessage.fulfilled, (state, action) => {
//         const newMessage = action.payload;
//         state.currentFile.userMessages.push(newMessage);
//       })
//       .addCase(updateSelectedText.fulfilled, (state, action) => {
//         state.currentFile.selectedText = action.payload;
//       });
//   },
// });

// export default chatHistorySlice.reducer;
