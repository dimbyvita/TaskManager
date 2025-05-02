import axios from './axios';

export const login = async (Pseudo: string, password: string | number , Role: string) => {
  return await axios.post('http://localhost:4257/api/auth/login', { Pseudo, password, Role });
};

export const register = async (Pseudo: string, password: string) => {
  return await axios.post('http://localhost:4257/api/auth/register', { Pseudo, password });
};