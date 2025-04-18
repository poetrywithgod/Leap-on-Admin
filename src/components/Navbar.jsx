import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../context/ThemeContextProvider'
import { IoNotificationsCircleOutline } from "react-icons/io5";
import {FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
  return (
    <div className='bg-gray-100 flex items-center justify-end text-gray-900 border-b w-full border-gray-300 p-4  dark:border-gray-600 dark:bg-gray-900 dark:text-white space-x-5 px-10'>
       <button className='text-2xl text-dark hover:bg-none' onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      <IoNotificationsCircleOutline className='w-6 h-6'/>
      <Link to='/setting'>
        <FaCog className='w-8 h-8 p-2 bg-black  text-gray-50 dark:bg-white dark:text-gray-900 rounded-full'/>
      </Link>
    </div>
  )
}

export default Navbar