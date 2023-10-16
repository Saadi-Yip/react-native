'use client'
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { MdOutlineDashboard, MdAccountCircle, MdAnalytics, MdOutlineSettings, MdLogout, MdTrendingUp, MdTask } from 'react-icons/md';
import { BsChevronDown, BsChevronUp, BsCalendarCheck, BsFiles, BsServer } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menus = [
    { title: 'Dashboard', src: 'Chart_fill', link: '/', icon: <MdOutlineDashboard /> },
    { title: 'Employee', src: 'User', gap: true, link: '/employee', icon: <MdAccountCircle /> },
    { title: 'Attendance', src: 'Calendar', icon: <BsCalendarCheck /> },
    {
        title: 'Leave Management',
        link: '/services',
        icon: <BsServer />,
        subMenus: [
            {
                title: 'Apply for Leave',
                src: '/hr/leave/apply',
                cName: 'sub-nav',
            },
            {
                title: 'Leave History',
                src: '/hr/leave/history',
                cName: 'sub-nav',
            },
        ],
    },
    {
        title: 'Payroll',
        link: '/services',
        icon: <BsServer />,
        subMenus: [
            {
                title: 'Salary Details',
                src: '/hr/payroll/salary',
                cName: 'sub-nav',
            },
            {
                title: 'Payslip',
                src: '/hr/payroll/payslip',
                cName: 'sub-nav',
            },
        ],
    },
    {
        title: 'Task Management',
        link: '/services',
        icon: <MdTask />,
    },
    {
        title: 'Progress Monitoring',
        src: 'Progress',
        icon: <MdTrendingUp />,
    },
    { title: 'Reports', link: '/services', icon: <MdAnalytics /> },
    { title: 'Documents', link: '/services', gap: true, icon: <BsFiles /> },
    { title: 'Settings', link: '/services', icon: <MdOutlineSettings /> },
    { title: 'Logout', icon: <MdLogout /> },
];

const Sidebar = ({ data }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const pathname = usePathname() // Initialize the router
 
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className={`w-72  bg-gray-800 h-screen overflow-hidden relative duration-500 text-white`}>
            <div className="justify-center items-end flex h-16  mt-2">
                <h2 className={`text-white font-medium text-2xl text-center duration-200 `}>
                    Leilani Tech
                </h2>
            </div>
            <ul className="pt-6 flex flex-col justify-center">
                {Menus.map((Menu, index) => (
                    <React.Fragment key={index}>
                        <li
                            className={`flex items-center justify-center p-2 ${pathname === Menu.link ? 'active' : ''}  cursor-pointer hover:bg-teal-700 ${Menu.gap ? 'mt-0' : 'mt-0'}`}
                        >
                            {Menu.icon ? (
                                <span className="text-2xl mr-2">{Menu.icon}</span>
                            ) : (
                                <MdOutlineDashboard className="text-xl mr-2" />
                            )}
                            {Menu.title === 'Logout' ? (
                                <span className={`flex-1`} onClick={() => signOut()}>
                                    {Menu.title}
                                </span>
                            ) : (
                                <Link className={`flex-1`} href={`${Menu.link ? Menu.link : '/'}`}>
                                    {Menu.title}
                                </Link>
                            )}
                            {Menu.subMenus && (
                                <button
                                    onClick={toggleSubMenu}
                                    className={`${subMenuOpen ? 'transform rotate-180' : ''} transition-transform ml-2`}
                                >
                                    {subMenuOpen ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                            )}
                        </li>
                        {Menu.subMenus && subMenuOpen && (
                            <ul className='ml-2'>
                                {Menu.subMenus.map((subMenuItem, idx) => (
                                    <li
                                        key={idx}
                                        className={`flex items-center p-2 cursor-pointer text-gray-300 hover:text-white text-lg ${router.pathname === subMenuItem.src ? 'active' : ''}`}
                                    >
                                        {subMenuItem.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {/* Add a divider line */}
                        {index < Menus.length - 1 && (
                            <hr className="border-t border-gray-600 my-1" />
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
