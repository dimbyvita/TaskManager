import React from "react";
import { Task } from "../../Task/Utils/Interfaces";

interface TaskInfoProps {
  task: Task| null;
  onClose: () => void;
}

export const TaskInfo: React.FC<TaskInfoProps> = ({ task, onClose }) => {
  return (
    <tr className="fixed inset-0 bg-black/40 text-black flex justify-center items-center z-50">
      <span className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">{task?.title}</h2>
        <p><strong>Owner :</strong> {task?.owner}</p>
        <p className="mt-2"><strong>Description :</strong></p>
        <p className="text-gray-700 dark:text-gray-500">{task?.description}</p>

        <span className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Fermer
          </button>
        </span>
      </span>
    </tr>
  );
};
