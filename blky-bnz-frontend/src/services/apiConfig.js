import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://organ-api.herokuapp.com/organ-api/",
  development: "http://localhost:9000/organ-api",
};


apiUrl = apiUrls.production;


const api = axios.create({
  baseURL: apiUrl,
});

export default api;
