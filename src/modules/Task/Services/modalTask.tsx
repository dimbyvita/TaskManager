import { useEffect, useRef, useState } from "react";
import { ModalProps, Task } from "../Utils/Interfaces";
import { useAdd } from "../Hook/useAdd";

export function ModalTask(props: ModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<'pending' | 'onHold' | 'inProgress' | 'completed'>('pending');
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const [owner, setOwner] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [departement, setDepartement] = useState("HR");

  const { addTask } = useAdd();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAddTask = async () => {
    const id = Math.random().toString(36).substr(2, 9);

    const taskToAdd: Task = {
      id,
      title,
      description,
      status,
      delai: { dayStart, dayEnd },
      owner,
      quantity,
      departement,
      fromOrigin: false,
      forEach: (arg0: any) => {}
    };

    try {
      const createdTask = await addTask(taskToAdd);
      props.addTask(createdTask);
      props.onClose();
    } catch (err) {
      console.error("Erreur lors de l’ajout de la tâche :", err);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4"
      role="dialog"
      aria-modal="true"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
        className="w-full max-w-lg md:max-w-xl bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 sm:p-8 rounded-3xl shadow-[0_0_40px_rgba(0,255,255,0.3)] border border-cyan-400 text-teal-800 dark:text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center tracking-wide text-cyan-300 drop-shadow-md">
          Create Your Project
        </h2>

        <div className="grid gap-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/10 text-teal-800 dark:text-white placeholder-gray-300 backdrop-blur-md shadow-inner transition-all duration-300"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/10 text-teal-800 dark:text-white placeholder-gray-300 backdrop-blur-md shadow-inner transition-all duration-300"
          />
          <input
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
            className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/10 text-teal-800 dark:text-white placeholder-gray-300 backdrop-blur-md shadow-inner transition-all duration-300"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
            className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/10 text-teal-800 dark:text-white placeholder-gray-300 backdrop-blur-md shadow-inner transition-all duration-300"
          />

          <label className="text-sm font-semibold mt-2">Select Department:</label>
          <select
            value={departement}
            onChange={(e) => setDepartement(e.target.value)}
            className="w-full bg-slate-700 p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-teal-800 dark:text-white backdrop-blur-md shadow-inner transition-all duration-300"
          >
            {["HR", "IT", "Finance", "Marketing", "Sales"].map(dep => (
              <option key={dep} value={dep}>{dep}</option>
            ))}
          </select>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              value={dayStart}
              onChange={(e) => setDayStart(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/10 text-teal-800 dark:text-white backdrop-blur-md shadow-inner transition-all duration-300"
            />
            <input
              type="date"
              value={dayEnd}
              onChange={(e) => setDayEnd(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/10 text-teal-800 dark:text-white backdrop-blur-md shadow-inner transition-all duration-300"
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
            className="w-full bg-slate-700 p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-teal-800 dark:text-white backdrop-blur-md shadow-inner transition-all duration-300"
          >
            <option value="pending">Pending</option>
            <option value="onHold">On Hold</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-teal-800 dark:text-white rounded-xl shadow-lg font-bold hover:scale-105 transition-all duration-300"
            type="submit"
          >
            {props.addIcon}
          </button>
          <button
            type="button"
            onClick={props.onClose}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pink-400 to-red-500 text-teal-800 dark:text-white rounded-xl shadow-lg font-bold hover:scale-105 transition-all duration-300"
          >
            {props.cancelIcon}
          </button>
        </div>
      </form>
    </div>
  );
}