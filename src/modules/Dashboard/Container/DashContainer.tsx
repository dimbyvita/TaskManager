import React from 'react';
import Sidebar from '../Components/Sidebar';
import useSidebar from '../hooks/useSidebar';
import { Footer } from '../Components/footer';
import Header from '../Components/header';
import { Outlet } from 'react-router-dom';

const DashContainer: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="w-full overflow-scroll md:overflow-hidden">
      <div className="relative flex bg-slate-200 h-full w-full">
        {/* side part */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} w-64 bg-slate-300 p-2`}>
          <Sidebar isOpen={sidebarOpen} />
        </div>

        {/* main part */}
        <div className=" w-full h-full flex flex-col justify-between">
          <div className='h-full'>
            <Header isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {/* content */}
            <div className="flex justify-center">
              <div className="overflow-y-auto">
                <Outlet />
              </div>
            </div>
            {/* content */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashContainer;
