import axios from "axios";

// Crea una instancia de Axios con la URL del  backend
const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export default api;
