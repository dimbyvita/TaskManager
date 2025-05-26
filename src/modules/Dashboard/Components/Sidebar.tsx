import React from 'react';
import { SidebarStatus } from '../Utils/Types';
import { NavLink } from 'react-router-dom';
import { TrendIcon } from '../UI/trend';
import { CalendarIcon } from '../UI/Calendar';
import { DocIcon } from '../UI/Docks';
import { HomeIcon } from '../UI/home';
import { useAuth } from '../../../contexte/AuthContext';
import { FaUserFriends } from 'react-icons/fa';

const Sidebar: React.FC<SidebarStatus> = ({ isOpen }) => {
  const { user } = useAuth();

  const navLinkStyle =
    'flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ease-in-out text-teal-700 hover:bg-white/10 hover:text-teal-900 dark:text-teal-300 dark:hover:text-white dark:hover:bg-zinc-700';

  const activeStyle =
    'bg-white/20 font-semibold text-teal-900 dark:bg-zinc-800 dark:text-white';

  return (
    <div
      className={`p-4 h-full w-full relative bg-white/10 dark:bg-zinc-900 border-r border-white/10 dark:border-zinc-700 backdrop-blur-lg shadow-md transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:block md:translate-x-0 fixed bottom-0 top-0 left-0 z-50`}
    >
      <div className="p-6">
        <h2 className="text-lg hidden md:block font-semibold text-teal-700 dark:text-teal-300 mb-6">Navigation</h2>
        <nav>
          <ul className="flex flex-col gap-4 text-sm">

            <li>
              <NavLink
                to="/Home"
                className={({ isActive }) => `${navLinkStyle} ${isActive ? activeStyle : ''}`}
              >
                <HomeIcon />
                <span className="hidden md:inline">Home</span>
              </NavLink>
            </li>

            {(user?.Role === 'admin' || user?.Role === 'manager' || user?.Role === 'supervisor') && (
              <li>
                <NavLink
                  to="Task"
                  className={({ isActive }) => `${navLinkStyle} ${isActive ? activeStyle : ''}`}
                >
                  <CalendarIcon />
                  <span className="hidden md:inline">Todo List</span>
                </NavLink>
              </li>
            )}

            {( user?.Role === 'manager') && (
              <li>
                <NavLink
                    to="Employee"
                    className={({ isActive }) => `${navLinkStyle} ${isActive ? activeStyle : ''}`}
                  >
                    <FaUserFriends />
                    <span className="hidden md:inline">Employee</span>
                  </NavLink>
              </li>
            )}

            {user?.Role === 'admin' && (
              <>
                <li>
                  <NavLink
                    to="Chart"
                    className={({ isActive }) => `${navLinkStyle} ${isActive ? activeStyle : ''}`}
                  >
                    <TrendIcon />
                    <span className="hidden md:inline">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) => `${navLinkStyle} ${isActive ? activeStyle : ''}`}
                  >
                    <FaUserFriends />
                    <span className="hidden md:inline">Users</span>
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
