import Link from 'next/link';
import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { signOut } from 'next-auth/react';

const Navbar = ({ data, toggleSidebar, sidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <button
        className="lg:hidden  mr-2 text-2xl  text-gray-100 hover:text-gray-800 focus:outline-none"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu />
      </button>

      <div className="relative hidden lg:block">
        <div className="absolute top-4 left-3 bg-slate-900">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
        </div>
        <input type="text" className="h-14 bg-gray-900 w-96 pl-10 pr-20 text-white rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
        <div className="absolute top-2 right-2">
          <button className="h-10 w-20 text-white rounded-lg bg-gray-600 hover:bg-red-600">Search</button>
        </div>
      </div>



      <div className="flex items-center space-x-6">

        <div className="relative group">
          <div className="text-white">
            <FaBell className="text-2xl cursor-pointer" />
          </div>

          <div className="bg-red-500 text-white text-center text-xs w-5 h-5 rounded-full absolute top-0 right-0 transform translate-x-2 -translate-y-2 group-hover:scale-100 group-hover:opacity-100 scale-0 opacity-0 transition-transform  duration-300">
            3
          </div>
        </div>


        <div className="relative group">
          <div
            className="text-white cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={data?.user?.image}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden z-10">
              <ul>
                <li className="hover:bg-gray-700 px-4 py-2">
                  <Link href="/edit-profile">Edit Profile</Link>
                </li>
                <li className="hover:bg-gray-700 text-white px-4 py-2 cursor-pointer hover:text-red-500">
                  <span onClick = {() => signOut()}>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
