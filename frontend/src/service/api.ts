import axios from "axios";

const URL = 'http://192.168.99.28:5000'; 

const api = axios.create({
  baseURL: URL
});

export { api };