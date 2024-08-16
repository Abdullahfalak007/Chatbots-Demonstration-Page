import api from "./ApiBaseUrl.js";
import axios from "axios";

// ENDPOINTS constants
const signup = import.meta.env.VITE_SIGNUP;
const login = import.meta.env.VITE_LOGIN;
const charts = import.meta.env.VITE_CHARTS;
const clients = import.meta.env.VITE_CLIENTS;
const virtualAssistants = import.meta.env.VITE_VIRTUAL_ASSISTANTS;
const chatHistory = import.meta.env.VITE_CHAT_HISTORY;
const knowledgebase = import.meta.env.VITE_KNOWLEDGEBASE;

export const userAPI = {
  signup: (data) =>
    api.post(signup, data, {
      headers: { "Content-Type": "application/json" },
    }),
  login: (data) =>
    api.post(login, data, {
      headers: { "Content-Type": "application/json" },
    }),
  knowledgebase: (data) => {
    return api.post(knowledgebase, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  charts: () => {
    return api.get(charts);
  },
  clients: () => api.get(clients),
  addClient: (data) => api.post(clients, data),
  updateClient: (id, data) => api.put(`${clients}/${id}`, data),
  deleteClient: (id) => api.delete(`${clients}/${id}`),
  virtualAssistants: () => api.get(virtualAssistants),
  addVirtualAssistant: (data) => api.post(virtualAssistants, data),
  updateVirtualAssistant: (id, data) =>
    api.put(`${virtualAssistants}/${id}`, data),
  deleteVirtualAssistant: (id) => api.delete(`${virtualAssistants}/${id}`),
  // getChatHistory: (chatId) =>
  //   axios.get(`${baseURL}/messages`, { params: { chat_id: chatId } }),
  // addMessage: (chatId, messageData) =>
  //   axios.post(`${baseURL}/messages`, { chat_id: chatId, ...messageData }),
  // updateSelectedText: (chatId, selectedTextId, selectedText) =>
  //   axios.put(`${baseURL}/messages/${selectedTextId}`, {
  //     chat_id: chatId,
  //     text: selectedText,
  //   }),
  knowledgebase: () => {
    return api.get(knowledgebase);
  },
};
