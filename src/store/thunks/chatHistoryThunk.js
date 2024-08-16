import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

// Fetch chat history using the new endpoint
export const fetchChatHistory = createAsyncThunk(
  "chatHistory/fetchChatHistory",
  async (chatId) => {
    const response = await userAPI.getChatHistory(chatId);
    return response.data;
  }
);

// Add a new input message to the chat history
export const addInputMessage = createAsyncThunk(
  "chatHistory/addInputMessage",
  async ({ chatId, newMessage }) => {
    const response = await userAPI.addMessage(chatId, newMessage);
    return response.data;
  }
);

// Update selected text in the chat history
export const updateSelectedText = createAsyncThunk(
  "chatHistory/updateSelectedText",
  async ({ chatId, selectedTextId, selectedText }) => {
    const response = await userAPI.updateSelectedText(
      chatId,
      selectedTextId,
      selectedText
    );
    return response.data;
  }
);
