import React from "react";
import { Task } from "../Utils/Interfaces";

interface TaskProps extends Task {
  handleOnDrag: (e: React.DragEvent, task: Task) => void;
}

const TaskInterface: React.FC<TaskProps> = ({
  handleOnDrag,
  title,
  owner,
  description,
  ...rest
}) => {
  const task: Task = { title, owner, description, ...rest };

  return (
    <div
      className={`
        rounded-xl px-4 py-2
        text-center text-base font-medium uppercase tracking-wide 
        text-gray-700 dark:text-teal-300
        bg-white/10 dark:bg-black/20 backdrop-blur-md
        border border-teal-800 
        cursor-move transition-transform duration-300
        hover:scale-105 relative
      `}
      draggable
      onDragStart={(e) => handleOnDrag(e, task)}
    >
      <span className="block w-full truncate">{title}</span>
      <span className="block w-full text-sm italic">{owner}</span>
      <span className="block w-full text-sm">{description}</span>
    </div>
  );
};

export default TaskInterface;
