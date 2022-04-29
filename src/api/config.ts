import axios from "axios";
import { API_TOKEN, API_TIMEOUT } from "../config";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org",
  timeout: API_TIMEOUT,
  headers: { Authorization: `Bearer ${API_TOKEN}` },
});

export default instance;
