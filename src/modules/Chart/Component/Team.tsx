import { FaUserFriends } from "react-icons/fa";
import { useDashboardStats } from "../Hooks/useDashboardStats";

export const Team = () => {
  const { data, loading } = useDashboardStats();

  if (loading || !data?.teams || typeof data.teams !== "object") {
    return <div className="text-gray-500">Loading teams...</div>;
  }

  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 bg-white px-4 py-6 rounded-lg">
        <div className="flex justify-between font-medium text-black text-xl my-4">
          <p>Teams</p>
          <FaUserFriends size={40} color="#197272" />
        </div>
        <h2 className="title-font font-semibold text-3xl text-gray-900">
          {data.teams.total}
        </h2>
        <p className="leading-relaxed text-gray-500">{data.teams.completed}% Completed</p>
      </div>
    </div>
  );
};