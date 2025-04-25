import axios from './axios';

export const getTasks = async () => axios.get('http://localhost:4257/api/tasks');
export const addTask = async (text: string) => axios.post('http://localhost:4257/api/tasks', { text });
export const deleteTask = async (id: string) => axios.delete(`http://localhost:4257/api/tasks/${id}`);
