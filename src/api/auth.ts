import axios from './axios';

export const login = async (Pseudo: string, password: string) => {
  return axios.post('/auth/login', { Pseudo, password });
};

export const register = async (Pseudo: string, password: string) => {
  return axios.post('/auth/register', { Pseudo, password });
};