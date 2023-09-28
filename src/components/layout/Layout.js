// components/Layout.js

import React from 'react';
import { FaBell, FaEnvelope, FaSearch, FaUser } from 'react-icons/fa'; // Import React Icons

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="bg-gray-800 w-64 p-4">
        {/* Sidebar content */}
      </nav>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-gray-700 p-4 h-20 flex items-center justify-between">
          {/* Logo */} 
          <div className="flex items-center">
            <form className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full focus:outline-none focus:bg-white focus:text-gray-900 placeholder-gray-500"
              />
              <button className="absolute right-0 top-0 h-full bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 focus:outline-none">
                <FaSearch /> {/* Use the FaSearch icon */}
              </button>
            </form>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications Dropdown */}
            <div className="relative">
              <button className="text-white">
                <FaBell /> {/* Use the FaBell icon */}
              </button>
              {/* Notifications Dropdown Content */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden">
                {/* Notifications content */} 
              </div>
            </div>

            {/* Messages Dropdown */}
            <div className="relative">
              <button className="text-white">
                <FaEnvelope /> {/* Use the FaEnvelope icon */}
              </button>
              {/* Messages Dropdown Content */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden">
                {/* Messages content */}
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button className="text-white">
                <FaUser /> {/* Use the FaUser icon */}
              </button>
              {/* Profile Dropdown Content */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden">
                {/* Profile content */}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-700 p-4">
          {/* Footer content */}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
