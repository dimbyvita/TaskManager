import  { useState } from "react";
import { ProfilesList } from "../Component/ProfilesList";
import AddProfil from "../Component/CreateEmployee";

function ManagerMenu () {
  const [activeComponent, setActiveComponent] = useState("profilesList");

  return (
    <div className="h-full bg-lime-400/20 to-violet-400 p-4 ">
      {/*flex  hover:text-teal-800 dark:text-white rounded-lg shadow-md shadow-gray-400/50 py-1 px-3 text-md font-medium  text-gray-5000 justify-center */}
      <div className="flex my-4 gap-1 justify-center">
        <button
          className={`px-4 py-2 rounded-md ${
            activeComponent === "profilesList"
              ? "relative overflow-hidden rounded-sm shadow-md shadow-teal-400/50 bg-lime-400/20 py-1 px-3 text-lg font-medium tracking-wider text-gray-500"
              : "relative overflow-hidden rounded-sm shadow-md shadow-teal-400/50 bg-lime-500/20 py-1 px-3 text-sm font-medium tracking-wider text-gray-500"
          }`}
          onClick={() => setActiveComponent("profilesList")}
        >
          Employee List
        </button>

        <button
          className={`px-4 py-2 rounded-md ${
            activeComponent === "addprofil"
              ? "relative overflow-hidden rounded-sm shadow-md shadow-teal-400/50 bg-lime-400/20 py-1 px-3 text-lg font-medium tracking-wider text-gray-500"
              : "relative overflow-hidden rounded-sm shadow-md shadow-teal-400/50 bg-lime-500/20 py-1 px-3 text-sm font-medium tracking-wider text-gray-500"
          }`}
          onClick={() => setActiveComponent("addprofil")}
        >
          Add new employee
        </button>

      </div>
      <div>
        {activeComponent === "profilesList" && <ProfilesList />}
        {activeComponent === "addprofil" && <AddProfil />}
      </div>
    </div>
  );
}

export default ManagerMenu;
