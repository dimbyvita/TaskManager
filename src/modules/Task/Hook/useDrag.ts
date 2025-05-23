import { useState } from "react";
import { Task, UseDragResult } from "../Utils/Interfaces";
import axios from "../../../api/axios"; // Assurez-vous d'avoir configuré axios correctement

export const useDrag = (): UseDragResult => {
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  // Handle drag start
  const handleOnDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData('application/json', JSON.stringify(task));
  };

  // Handle drop with backend update
  const handleOnDrop = async (
    e: React.DragEvent,
    targetStatus: 'pending' | 'onHold' | 'inProgress' | 'completed'
  ): Promise<Task | null> => {
    e.preventDefault();
    const data = e.dataTransfer.getData('application/json');

    if (!data) {
      console.error("Aucune donnée reçue lors du drop");
      return null;
    }

    let droppedTask: Task;
    try {
      droppedTask = JSON.parse(data);

      if (!droppedTask.id) {
        throw new Error("Task is missing an id");
      }

      // Update the task's status locally
      const updatedTask: Task = {
        ...droppedTask,
        status: targetStatus,
      };
      
      // Update the task status on the backend (assuming the backend is expecting PUT requests)
      await axios.put(`/api/tasks/${updatedTask.id}`, updatedTask.status);

      // Optionally, you can update the state here, but this is handled elsewhere in your app.
      setDraggedTask(updatedTask); // Update the local dragged task state

      return updatedTask;
    } catch (err) {
      console.error("Erreur lors du drop ou de la mise à jour :", err);
      return null;
    }
  };

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return {
    draggedTask,
    handleOnDragStart,
    handleOnDrop,
    handleOnDragOver,
  };
};
