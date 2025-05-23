import React, { useState, useRef, useEffect } from "react";
import { SidebarStatus } from "../Utils/Types";
import { LogOutIcon } from "../UI/logOut";
import { MoonIcon } from "../UI/Moon";
import { UserIcon } from "../UI/Profil";
import { SettingIcon } from "../UI/Setting";
import { MenuIcon } from "../UI/Menu";
import { CalendarPM } from "../../Calendar/Components/CalendarPM";
import { CalendarIcon } from "../UI/Calendar";
import TaskManager_Logo from "../../../assets/TaskManager_Logo.png";
import { useTheme } from "../../../contexte/ThemeContext";
import { EditProfileModal } from "../Utils/EditPMo";

const Header: React.FC<SidebarStatus> = ({ toggleSidebar }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <header className="bg-teal-900/40 backdrop-blur-md text-teal-800 px-6 py-4 flex justify-between items-center shadow-sm border-b border-white/10">
      <div className="flex gap-3 items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-white/10 transition hover:text-teal-500"
          aria-label="Toggle Sidebar"
        >
          <MenuIcon />
        </button>
        <h1 className="text-sm z-10 sm:text-3xl font-semibold tracking-wider flex gap-1 items-center">
          <img
            src={TaskManager_Logo}
            className="w-14 h-14"
            alt="Logo task Manager"
          />
          Maneo Task
        </h1>
      </div>

      <div className="flex gap-1">
        <div className="relative" ref={calendarRef}>
          <button
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="calendar"
          >
            <CalendarIcon />
          </button>

          {isCalendarOpen && <CalendarPM />}
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="User menu"
          >
            <SettingIcon />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 hover:text-teal-500 shadow-xl rounded-xl overflow-hidden z-50">
              <ul className="text-sm">
                <li
                  onClick={() => setIsProfileModalOpen(true)}
                  className="flex gap-2 items-center px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <UserIcon /> Profile
                </li>
                {isProfileModalOpen && <EditProfileModal onClose={() => setIsProfileModalOpen(false)} />}
                <li
                  onClick={toggleTheme}
                  className="flex gap-2 items-center px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <MoonIcon /> {isDark ? "Light Mode" : "Dark Mode"}
                </li>
                <li
                  onClick={handleLogout}
                  className="flex gap-2 items-center px-4 py-3 text-red-600 hover:bg-red-50 cursor-pointer"
                >
                  <LogOutIcon /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
