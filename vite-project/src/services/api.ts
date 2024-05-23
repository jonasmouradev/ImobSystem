import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:54242',
});

export default api;
