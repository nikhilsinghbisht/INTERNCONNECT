import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500",
});

// Set the default headers for all requests
api.defaults.headers.common["Content-Type"] = "application/json";
// api.defaults.headers.common["Access-Control-Allow-Origin"] =
//   "http://localhost:5500";

export default api;