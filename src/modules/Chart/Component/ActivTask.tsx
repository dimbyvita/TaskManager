import { IoMenuSharp } from 'react-icons/io5';
import { useDashboardStats } from '../Hooks/useDashboardStats';

export const ActivTask = () => {
  const { data, loading } = useDashboardStats();

  if (loading) {
    return (
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 bg-white dark:bg-slate-700 px-4 py-6 rounded-lg text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className=" bg-gray-500 px-4 py-6 rounded-lg">
        <div className="flex justify-between font-medium text-white text-xl my-4">
          <p>Active Tasks</p>
          <IoMenuSharp size={40} color="#49F3F0" />
        </div>
        <h2 className="title-font font-semibold text-3xl text-white">{data?.activeTasks.total}</h2>
        <p className="leading-relaxed text-white">{data?.activeTasks.completed}% Completed</p>
      </div>
    </div>
  );
};
