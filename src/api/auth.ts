import axios from './axios';

export const login = async (Pseudo: string, password: string | number , role: string) => {
  return await axios.post('http://localhost:4725/api/auth/login', { Pseudo, password, role });
};

export const register = async (Pseudo: string, password: string) => {
  return await axios.post('http://localhost:4725/api/auth/register', { Pseudo, password });
};