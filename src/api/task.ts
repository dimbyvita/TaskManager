import axios from './axios';

export const getTasks = async () => axios.get('/tasks');
export const addTask = async (text: string) => axios.post('/tasks', { text });
export const deleteTask = async (id: string) => axios.delete(`/tasks/${id}`);
