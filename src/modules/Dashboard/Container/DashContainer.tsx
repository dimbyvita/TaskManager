import React from 'react';
import Sidebar from '../Components/Sidebar';
import useSidebar from '../hooks/useSidebar';
<<<<<<< HEAD
// import { Footer } from '../Components/footer';
=======
import { Footer } from '../Components/footer';
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
import Header from '../Components/header';
import { Outlet } from 'react-router-dom';

const DashContainer: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
<<<<<<< HEAD
    <div className="w-full  md:overflow-hidden flex bg-lime-400/20 text-white dark:text-black min-h-screen">
      <div className="relative flex bg-slate-200  w-full">
        {/* Sidebar */}
        <div
          className={`${sidebarOpen ? 'block' : 'hidden'} bg-slate-300 p-2 transition-transform duration-300 ease-in-out bg-white/10 backdrop-blur-md shadow-lg border-r border-white/10`}
          aria-hidden={!sidebarOpen}
          // optionally add role="complementary" or "navigation" depending on Sidebar content
        >
          <Sidebar isOpen={sidebarOpen} />
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-30 md:hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}

        {/* Main content */}
        <div className="w-full h-full flex flex-col ">
          <div className="w-full h-full">
            <Header isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {/* Page content */}
            <main className="w-full h-full" tabIndex={-1}>
              <div className="w-full h-full">
                <Outlet />
              </div>
            </main>
            {/* <Footer /> */}
=======
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
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashContainer;
