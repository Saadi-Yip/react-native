'use client'
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Layout = ({ children, data }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {data: session, status} = useSession(); 
  const router = useRouter(); 
  useEffect(() => {
    if (status === 'unauthenticated') {
        router.push('/login');
      }
}, [session, router]);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex max-h-screen ">
      <div className={`lg:flex ${sidebarOpen ? 'block' : 'hidden'}`} >
        <Sidebar data={session} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar data={session} toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 w-full">
          {children}
        </main>

      </div>
    </div>
  );
};

export default Layout;
