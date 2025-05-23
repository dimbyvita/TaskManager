import { useEffect, useState } from "react";
import { useDrag } from "../Hook/useDrag";
import { AddTask } from "../Component/AddTask";
import axios from "../../../api/axios";
import TaskInterface from "../Component/Tasks";
import { Task } from "../Utils/Interfaces";
import { useAdd } from "../Hook/useAdd";

const TaskContainer = () => {
  const { handleOnDragStart, handleOnDrop, handleOnDragOver } = useDrag();
  const { addTask } = useAdd();
  const [originTasks, setOriginTasks] = useState<Task[]>([]);
  const [destinationTasks, setDestinationTasks] = useState<Task[]>([]);
  const [onHoldTasks, setOnHoldTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      const allTasks: Task[] = res.data;
      setOriginTasks(allTasks.filter((task) => task.status === "pending"));
      setDestinationTasks(allTasks.filter((task) => task.status === "inProgress"));
      setOnHoldTasks(allTasks.filter((task) => task.status === "onHold"));
      setCompletedTasks(allTasks.filter((task) => task.status === "completed"));
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDropToColumn = async (
    e: React.DragEvent,
    targetStatus: "pending" | "onHold" | "inProgress" | "completed"
  ) => {
    const updatedTask = await handleOnDrop(e, targetStatus);
    if (updatedTask) {
      try {
        await axios.put(
          `/api/tasks/${updatedTask.id}`,
          { ...updatedTask, status: targetStatus },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        fetchTasks();
      } catch (error) {
        console.error("Failed to update task status:", error);
      }
    }
  };

  const renderColumn = (
    title: string,
    tasks: Task[],
    status: "pending" | "onHold" | "inProgress" | "completed",
    bgColor: string
  ) => (
    <div
      className={`flex-1 flex flex-col gap-4 ${bgColor} h-full p-4 rounded-2xl shadow-md border border-white/10 min-w-[250px]`}
      onDrop={(e) => handleDropToColumn(e, status)}
      onDragOver={handleOnDragOver}
    >
      <h2 className="text-lg md:text-xl font-semibold tracking-wide text-teal-900 dark:text-white mb-2">
        {title}
      </h2>

      {status === "pending" && <AddTask addTask={addTask} />}

      <div className="flex flex-col gap-3 overflow-auto max-h-[calc(100vh-180px)] pr-1 scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-transparent">
        {tasks.length ? (
          tasks.map((task) => (
            <TaskInterface key={task.id} {...task} handleOnDrag={handleOnDragStart} />
          ))
        ) : (
          <p className="text-sm italic text-gray-800 dark:text-gray-400 mt-2">No tasks yet.</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-start items-stretch gap-6 p-4 w-full bg-lime-100 dark:bg-zinc-900 h-full text-white overflow-x-auto">
      {renderColumn("Pending Tasks", originTasks, "pending", "bg-white/10 dark:bg-white/5")}
      {renderColumn("In Progress", destinationTasks, "inProgress", "bg-green-400/60")}
      {renderColumn("On Hold", onHoldTasks, "onHold", "bg-orange-400/60")}
      {renderColumn("Completed", completedTasks, "completed", "bg-blue-400/60")}
    </div>
  );
};

export default TaskContainer;
