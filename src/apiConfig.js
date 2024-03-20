// apiConfig.js

import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "d687e2cb80msh3842634e4adac72p1856c9jsnc7f9821b3732",
    "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
  },
});
export default apiInstance;
