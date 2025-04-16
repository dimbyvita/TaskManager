import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4257/', 
  withCredentials: true,
});

export default instance;

