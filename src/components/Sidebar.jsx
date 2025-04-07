import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaCog } from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineShield } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";




const Sidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const activeClass = "bg-orange-500 text-orange-50 text-white";
    const inactiveClass = "hover:bg-gray-600 hover:text-white";

    return (
        <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-48 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>
                <img src="/logo.png" alt="" />
            </h1>
            <ul className='flex flex-col mt-5 text-sm font-bold'>
				<Link to='/dashboard' className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/dashboard') ? activeClass : inactiveClass}`}>
					<MdOutlineDashboard />
					<Link to='/dashboard' className='hidden md:inline'>
						Dashboard
					</Link>
                </Link>
                <li className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/orders') ? activeClass : inactiveClass}`}>
                    <IoBookOutline />
                    <Link to='/menteehub' className='hidden md:inline '>Mentee Hub</Link>
                </li>
                <li className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/customers') ? activeClass : inactiveClass}`}>
                    <MdOutlineShield />
                    <Link to='/mentorhub' className='hidden md:inline '>Mentor Hub</Link>
                </li>
                <li className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/users') ? activeClass : inactiveClass}`}>
                    <RiCalendarScheduleLine />
                    <Link to='/users' className='hidden md:inline '>Schedule</Link>
                </li>
                <li className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/products') ? activeClass : inactiveClass}`}>
                    <IoNotificationsCircleOutline/>
                    <Link to='/products' className='hidden md:inline '>Notification</Link>
                </li>
                <li className='mt-10'>
                    <h1 className='hidden sm:inline-block text-lg my-5'>Manage Account</h1>
                    <Link to='/profile' className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/profile') ? activeClass : inactiveClass}`}>
                    <CgProfile />
                        <Link to='/profile' className='hidden md:inline '>Profiles</Link>
                    </Link>

                     <Link to='/setting' className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/setting') ? activeClass : inactiveClass}`}>
                    <FaCog />
                    <Link to='/setting' className='hidden md:inline '>Setting</Link>
                </Link>
               </li>
            </ul>
        </div>
    )
}

export default Sidebar;