import React from 'react';
import { SidebarStatus } from '../Utils/Types';
import { Link } from 'react-router-dom';
import { TrendIcon } from '../UI/trend';
import { CalendarIcon } from '../UI/Calendar';
import { DocIcon } from '../UI/Docks';
import { HomeIcon } from '../UI/home';

const Sidebar: React.FC<SidebarStatus> = ({ isOpen }) => {
  return (
    <div
      className={`p-4 h-full w-full relative shadow-md transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:block md:translate-x-0 fixed top-0 left-0 z-50`}
    >
      <h2 className="text-xl font-semibold mb-4">Sidebar</h2>

      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              to="/Home"
              className="py-2 px-4 text-teal-900 hover:text-white hover:bg-teal-600 rounded-md flex items-center gap-x-4"
            >
              <HomeIcon />
              <span className="hidden md:flex">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Task"
              className="py-2 px-4 text-teal-900 hover:text-white hover:bg-teal-600 rounded-md flex items-center gap-x-4"
            >
              <CalendarIcon />
              <span className="hidden md:flex">Todo Liste</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Chart"
              className="py-2 px-4 text-teal-900 hover:text-white hover:bg-teal-600 rounded-md flex items-center gap-x-4"
            >
              <TrendIcon />
              <span className="hidden md:flex">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Employe"
              className="py-2 px-4 text-teal-900 hover:text-white hover:bg-teal-600 rounded-md flex items-center gap-x-4"
            >
              <DocIcon />
              <span className="hidden md:flex">Docs</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
