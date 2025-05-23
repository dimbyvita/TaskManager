// services/taskService.ts
import axios from "../../../api/axios";

export const getTasksByProject = async (projectId: string) => {
  const res = await axios.get(`/projects/${projectId}/tasks`);
  return res.data;
};

export const createTask = async (projectId: string, taskData: any) => {
  const res = await axios.post(`/projects/${projectId}/tasks`, taskData);
  return res.data;
};

export const updateTask = async (
  projectId: string,
  id: string,
  updatedData: any
) => {
  const res = await axios.put(`/projects/${projectId}/tasks/${id}`, updatedData);
  return res.data;
};

export const deleteTask = async (projectId: string, id: string) => {
  const res = await axios.delete(`/projects/${projectId}/tasks/${id}`);
  return res.data;
};
