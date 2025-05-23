import { MdTrendingUp } from "react-icons/md";
import { useProductivity } from "../Hooks/useProductivity";

export const Productivity = () => {
  const { productivity, loading } = useProductivity();

  if (loading) {
    return (
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 bg-white px-4 py-6 rounded-lg text-center">
          <p className="text-gray-500">Loading productivity...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className=" bg-emerald-700 px-4 py-6 rounded-lg">
        <div className="flex justify-between font-medium text-white text-xl my-4">
          <p>Productivity</p>
          <MdTrendingUp size={40} color="#75B033" />
        </div>
        <h2 className="title-font font-semibold text-3xl text-white">{productivity?.total}%</h2>
        <p className="leading-relaxed text-white">{productivity?.completed}% Completed</p>
      </div>
    </div>
  );
};
