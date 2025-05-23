import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { ModalTask } from "../Services/modalTask";
import { MdOutlineCancel } from "react-icons/md";
import { Task } from "../Utils/Interfaces";

interface AddTaskProps {
  addTask: (TaskType: Task) => void;
}

export const AddTask = ({ addTask }: AddTaskProps) => {
  const [clicked, setClicked] = useState(false);

  const toggleModal = () => setClicked((prev) => !prev);

  const handleAddTask = (newTask: Task) => {
    addTask(newTask);
    toggleModal();
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="group relative w-full sm:w-44 h-16 sm:h-20 rounded-xl border border-teal-300 bg-white/10 dark:bg-white/5 backdrop-blur-md text-white dark:text-white hover:shadow-xl hover:border-amber-400 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center justify-center overflow-hidden"
      >
        <IoAddCircleOutline className="text-3xl sm:text-4xl group-hover:text-slate-900 dark:group-hover:text-amber-300 transition duration-300" />
        <span className="text-xs sm:text-sm text-orange-950 dark:text-white font-semibold mt-1">Add Project</span>

        <span
          className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-teal-400 to-green-900 opacity-20 blur-sm rounded-xl group-hover:opacity-40 transition-all duration-300 ease-in-out pointer-events-none"
          aria-hidden="true"
        />
      </button>

      {clicked && (
        <ModalTask
          addTask={handleAddTask}
          open={clicked}
          onClose={toggleModal}
          addIcon={<IoAddCircleOutline />}
          cancelIcon={<MdOutlineCancel />}
        />
      )}
    </>
  );
};
