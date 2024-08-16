import axios from "axios";

const baseURL = import.meta.env.VITE_API_DOMAIN;

console.log({ baseURL });
// Create an instance of Axios with the base URL
const api = axios.create({
  baseURL,
});

// Export the API instance
export default api;
