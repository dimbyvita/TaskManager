import React, { useState, useRef, useEffect } from 'react';
import { SidebarStatus } from '../Utils/Types';
import { LogOutIcon } from '../UI/logOut';
import { MoonIcon } from '../UI/Moon';
import { UserIcon } from '../UI/Profil';
import { SettingIcon } from '../UI/Setting';
import { MenuIcon } from '../UI/Menu';

const Header: React.FC<SidebarStatus> = ({ toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Ferme le menu si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/'; // redirection vers login
  };

  return (
    <div className="bg-blue-600/50 p-4 flex justify-between items-center relative">
      <div className="flex gap-1 items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-blue-500 rounded text-white/35 hover:text-white"
          aria-label="Toggle Sidebar"
        >
          {/* Menu Icon */}
          
          <MenuIcon/>
        </button>
        <h1 className="text-2xl text-white">Header</h1>
      </div>

      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-blue-500 rounded focus:outline-none text-white/35 hover:text-white"
          aria-label="User menu"
        >
          <SettingIcon />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
            <ul className="text-sm text-gray-700">
              <li className="hover:bg-blue-100 flex gap-4 px-4 py-2 cursor-pointer"><UserIcon /> Profil</li>
              {/* <li className="hover:bg-blue-100 flex gap-4 px-4 py-2 cursor-pointer">⚙️ Paramètres</li> */}
              <li className="hover:bg-blue-100 flex gap-4 px-4 py-2 cursor-pointer"><MoonIcon />  Changer de thème</li>
              <li onClick={handleLogout} className="hover:bg-red-100 flex gap-4 text-red-600 px-4 py-2 cursor-pointer"> <LogOutIcon /> Déconnexion</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
