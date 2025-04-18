import axios from './axios';

export const getTasks = async () => axios.get('http://localhost:4725/api/tasks');
export const addTask = async (text: string) => axios.post('http://localhost:4725/api/tasks', { text });
export const deleteTask = async (id: string) => axios.delete(`http://localhost:4725/api/tasks/${id}`);
