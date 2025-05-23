import React from 'react';
import { SidebarStatus } from '../Utils/Types';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
import { TrendIcon } from '../UI/trend';
import { CalendarIcon } from '../UI/Calendar';
import { DocIcon } from '../UI/Docks';
import { HomeIcon } from '../UI/home';
<<<<<<< HEAD
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
=======

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
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
    </div>
  );
};

export default Sidebar;
