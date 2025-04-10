import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../context/ThemeContextProvider'
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoFunnelOutline } from "react-icons/io5";
import {FaCog } from 'react-icons/fa';




const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
  return (
    <div className='bg-gray-100 flex items-center justify-end text-gray-900 border-b w-full border-gray-300 p-4  dark:border-gray-600 dark:bg-gray-900 dark:text-white space-x-5 px-10'>
       <button className='text-2xl text-dark' onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      <IoFunnelOutline className='w-6 h-6'/>
      <IoNotificationsCircleOutline className='w-6 h-6'/>
      <FaCog className='w-8 h-8'/>
    </div>
  )
}

export default Navbar