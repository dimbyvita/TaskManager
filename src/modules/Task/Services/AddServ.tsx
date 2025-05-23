import axios from "axios";
import { Task } from "../Utils/Interfaces";
import { useContext } from "react";
import { AuthContext } from "../../../contexte/AuthContext";

const apiT = "http://localhost:4257/api/tasks";

export const TaskAPI = async (task: Task) => {
  const { token } = useContext(AuthContext);
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.post(apiT, task);
    return response.data;
  } catch (error: any) {
    console.error("Erreur lors de l'ajout de la tâche :", error.response?.data || error.message);
    throw error;
  }
};