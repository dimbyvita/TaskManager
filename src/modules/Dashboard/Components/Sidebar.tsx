import React from 'react';
import { SidebarStatus } from '../Utils/Types';
import { Link } from 'react-router-dom';

const Sidebar: React.FC<SidebarStatus> = ({ isOpen }) => {
  return (
    <div
      className={` p-4 h-full w-full relative shadow-md transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:block md:translate-x-0 fixed top-0 left-0 z-50`}
    >
      <h2 className="text-xl font-semibold mb-4">Sidebar</h2>

      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/Home" className="py-2 px-4 text-teal-900 hover:text-white hover:bg-teal-600 rounded-md flex">
              <p className="flex items-center gap-x-3.5 py-2 px-2.5">
                <span className='hidden md:flex'>
                  Home
                </span>
                svg place
              </p>
            </Link>
          </li>
          <li>
            <Link to="/Task" className="py-2 px-4 text-teal-900 hover:text-white hover:bg-teal-600 rounded-md flex">
              <p className="flex items-center gap-x-3.5 py-2 px-2.5">
                 <span className='hidden md:flex'>
                  Todo Liste
                </span>
                svg place
              </p>
            </Link>
          </li>
          <li>
            <Link to="/Chart" className="py-2 px-4 text-teal-900 hover:text-white hover:bg-teal-600 rounded-md flex">
              <p className="flex items-center gap-x-3.5 py-2 px-2.5">
                 <span className='hidden md:flex'>
                  Dashboard
                </span>
                svg place
              </p>
              <img src='../../../assets/trend-analysis-svgrepo-com.svg' alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Employe" className="py-2 px-4 text-teal-900 hover:text-white hover:bg-teal-600 rounded-md flex">
              <p className="flex items-center gap-x-3.5 py-2 px-2.5">
                  <svg className="fill-gray-200" xmlns="http://www.w3.org/2000/svg" version="1.1" width="18" height="18" viewBox="0 0 256 256">
                      {/* <defs>
                      </defs> */}
                      <g className="stroke: none; strokeWidth: 0; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                          <path d="M 73.383 90 H 16.617 c -2.57 0 -4.661 -2.091 -4.661 -4.661 V 17.985 c 0 -2.57 2.091 -4.661 4.661 -4.661 h 10.729 c 0.552 0 1 0.448 1 1 s -0.448 1 -1 1 H 16.617 c -1.467 0 -2.661 1.193 -2.661 2.661 v 67.354 c 0 1.468 1.193 2.661 2.661 2.661 h 56.766 c 1.468 0 2.661 -1.193 2.661 -2.661 V 17.985 c 0 -1.467 -1.193 -2.661 -2.661 -2.661 H 62.653 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 h 10.729 c 2.57 0 4.661 2.091 4.661 4.661 v 67.354 C 78.044 87.909 75.953 90 73.383 90 z" className="stroke: none; strokeWidth: 1; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 62.653 19.978 H 27.347 c -0.552 0 -1 -0.448 -1 -1 v -5.622 c 0 -3.545 2.884 -6.429 6.429 -6.429 h 3.664 C 37.283 2.92 40.816 0 45 0 s 7.717 2.92 8.561 6.928 h 3.664 c 3.545 0 6.429 2.884 6.429 6.429 v 5.622 C 63.653 19.53 63.206 19.978 62.653 19.978 z M 28.347 17.978 h 33.307 v -4.622 c 0 -2.442 -1.986 -4.429 -4.429 -4.429 h -4.518 c -0.512 0 -0.94 -0.386 -0.994 -0.895 C 51.349 4.594 48.463 2 45 2 c -3.463 0 -6.349 2.594 -6.712 6.033 c -0.054 0.509 -0.483 0.895 -0.995 0.895 h -4.518 c -2.442 0 -4.429 1.987 -4.429 4.429 V 17.978 z" className="stroke: none; strokeWidth: 1; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 27.213 39.609 c -0.028 0 -0.057 -0.001 -0.085 -0.004 c -0.311 -0.026 -0.591 -0.196 -0.758 -0.459 l -3.168 -4.979 c -0.296 -0.466 -0.159 -1.084 0.307 -1.38 c 0.465 -0.297 1.084 -0.159 1.38 0.307 l 2.466 3.875 l 6.45 -7.091 c 0.372 -0.408 1.005 -0.438 1.413 -0.067 c 0.409 0.372 0.438 1.004 0.067 1.413 l -7.331 8.06 C 27.763 39.491 27.494 39.609 27.213 39.609 z" className="stroke: none; strokeWidth: 1; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 27.213 59.132 c -0.028 0 -0.057 -0.001 -0.085 -0.004 c -0.311 -0.026 -0.591 -0.196 -0.758 -0.459 l -3.168 -4.979 c -0.296 -0.466 -0.159 -1.084 0.307 -1.381 c 0.467 -0.296 1.083 -0.158 1.381 0.307 l 2.466 3.875 l 6.45 -7.091 c 0.372 -0.407 1.005 -0.439 1.413 -0.066 c 0.409 0.371 0.438 1.004 0.067 1.412 l -7.331 8.059 C 27.763 59.014 27.494 59.132 27.213 59.132 z" className="stroke: none; strokeWidth: 1; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 27.213 78.656 c -0.028 0 -0.057 -0.001 -0.085 -0.004 c -0.311 -0.026 -0.591 -0.196 -0.758 -0.459 l -3.168 -4.979 c -0.296 -0.466 -0.159 -1.084 0.307 -1.381 c 0.465 -0.296 1.084 -0.157 1.38 0.307 l 2.466 3.875 l 6.45 -7.091 c 0.372 -0.407 1.005 -0.438 1.413 -0.067 c 0.409 0.372 0.438 1.005 0.067 1.413 l -7.331 8.06 C 27.763 78.538 27.494 78.656 27.213 78.656 z" className="stroke: none; strokeWidth: 1; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 65.955 35.948 H 42.19 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 23.765 c 0.553 0 1 0.448 1 1 S 66.508 35.948 65.955 35.948 z" className="stroke: none; strokeWidth: 1; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 65.955 55.472 H 42.19 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 23.765 c 0.553 0 1 0.447 1 1 S 66.508 55.472 65.955 55.472 z" className="stroke: none; strokeWidth: 1; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 65.955 74.995 H 42.19 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 23.765 c 0.553 0 1 0.447 1 1 S 66.508 74.995 65.955 74.995 z" className="stroke: none; strokeWidth: 1; strokeDasharray: none; strokeLinecap: butt; strokeLinejoin: miter; strokeMiterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                      </g>
                    </svg>
                  <span className='md:hidden lg:hidden'>
                    Docs
                  </span>
              </p> 
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
