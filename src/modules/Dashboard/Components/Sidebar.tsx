import React from 'react';
import { SidebarStatus } from '../Utils/Types';
import { Link } from 'react-router-dom';

const Sidebar: React.FC<SidebarStatus> = ({ isOpen }) => {
  return (
    <aside
      className={`bg-slate-300 p-4 h-full shadow-md transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:block md:translate-x-0 fixed top-0 left-0 z-50`}
    >
      <h2 className="text-xl font-semibold mb-4">Sidebar</h2>

      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/Home" className="py-2 px-4 text-white hover:bg-teal-600 rounded-md block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Task" className="py-2 px-4 text-white hover:bg-teal-600 rounded-md block">
              Todo Liste
            </Link>
          </li>
          <li>
            <Link to="/Chart" className="py-2 px-4 text-white hover:bg-teal-600 rounded-md block">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Employe" className="py-2 px-4 text-white hover:bg-teal-600 rounded-md block">
              Employee
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
