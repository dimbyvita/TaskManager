import React from 'react';
import { SidebarStatus } from '../Utils/Types';
import { Link } from 'react-router-dom';



const Sidebar: React.FC<SidebarStatus> = ({ isOpen}) => {
  return (
    <aside className={`bg-slate-300 p-2 h-full ${isOpen ? 'block' : 'hidden'} md:block`}>
      <h2>Sidebar</h2>
      
      <nav>
        <ul className=" flex ">
          <Link to="/Home" className=" py-2 border-b border-gray-300">Home</Link>
          <Link to="/Task" className=" py-2 border-b border-gray-300">Todo Liste</Link>
          <Link to="/Chart" className=" py-2 border-b border-gray-300">Dashboard</Link>
          <Link to="/Employe" className=" py-2 border-b border-gray-300">Employee</Link>
        </ul>
      </nav> 
    </aside>
  );
};

export default Sidebar;
