import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/danileao/serverproducts/",
});

export default api;
