import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineShield } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md"; // New icon for pending requests
import { useLanguage } from '../context/LanguageContext';


const Sidebar = () => {
    const location = useLocation();
    const { t } = useLanguage();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const activeClass = "bg-orange-500 text-orange-50 text-white";
    const inactiveClass = "hover:bg-gray-600 hover:text-white";

    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen px-4 fixed w-16 md:w-48 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>
                <img src="/logo.png" alt="Logo" />
            </h1>
            <ul className='flex flex-col mt-5 text-sm font-bold'>
                <Link 
                    to='/dashboard' 
                    className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/dashboard') ? activeClass : inactiveClass}`}
                >
                    <MdOutlineDashboard />
                    <span className='hidden md:inline'>{t('Dashboard')}</span>
                </Link>
                
                <Link 
                    to='/menteehub' 
                    className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/menteehub') ? activeClass : inactiveClass}`}
                >
                    <IoBookOutline />
                    <span className='hidden md:inline'>{t('Mentee Hub')}</span>
                </Link>
                
                <Link 
                    to='/mentorhub' 
                    className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/mentorhub') ? activeClass : inactiveClass}`}
                >
                    <MdOutlineShield />
                    <span className='hidden md:inline'>{t('Mentor Hub')}</span>
                </Link>
                
                {/* Add Pending Requests link */}
                <Link 
                    to='/pending-requests' 
                    className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/pending-requests') ? activeClass : inactiveClass}`}
                >
                    <MdOutlinePendingActions />
                    <span className='hidden md:inline'>{t('Pending Requests')}</span>
                </Link>
                
                <Link 
                    to='/schedule' 
                    className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/schedule') ? activeClass : inactiveClass}`}
                >
                    <RiCalendarScheduleLine />
                    <span className='hidden md:inline'>{t('Schedule')}</span>
                </Link>
                
                <Link 
                    to='/notification' 
                    className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/notification') ? activeClass : inactiveClass}`}
                >
                    <IoNotificationsCircleOutline/>
                    <span className='hidden md:inline'>{t('Notification')}</span>
                </Link>
                
                <li className='mt-10'>
                    <h1 className='hidden md:inline-block text-lg my-5'>{t('Manage Account')}</h1>
                    <Link 
                        to='/setting' 
                        className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer ${isActive('/setting') ? activeClass : inactiveClass}`}
                    >
                        <FaCog />
                        <span className='hidden md:inline'>{t('Settings')}</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;