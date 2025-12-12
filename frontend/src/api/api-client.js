import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
// import Cookies from 'js-cookie'; // Importamos js-cookie
const url = 'http://localhost:3001/auth'

const apiClient = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default apiClient;