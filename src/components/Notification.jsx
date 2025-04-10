import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { PiHandshakeFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

const Notification = () => {
  return (
            <div className='w-full px-5 h-auto'>
                <h1 className='text-xl bg-white dark:bg-gray-800 p-5'> Notifications</h1>
                    <div className='space-y-5 mt-5'>
                        <h2 className='pt-2 px-2'>Today</h2>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <FaCircleCheck className='w-6 h-6 text-green-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>9:30am</p>
                        </div>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <PiHandshakeFill className='w-6 h-6 text-orange-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>11:30am</p>
                        </div>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <FaUserPlus className='w-6 h-6 text-blue-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>11:30am</p>
                        </div>
                    </div>

                    <div className='space-y-5 mt-5'>
                        <h2 className='pt-2 px-2'>Yesterday</h2>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <FaCircleCheck className='w-6 h-6 text-green-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>9:30am</p>
                        </div>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <PiHandshakeFill className='w-6 h-6 text-orange-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>11:30am</p>
                        </div>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <FaUserPlus className='w-6 h-6 text-blue-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>11:30am</p>
                        </div>
                    </div>
          
                    <div className='space-y-5 mt-5'>
                        <h2 className='pt-2 px-2'>Old Message</h2>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <FaCircleCheck className='w-6 h-6 text-green-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>9:30am</p>
                        </div>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <PiHandshakeFill className='w-6 h-6 text-orange-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>11:30am</p>
                        </div>
                        <div className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'>
                            <div className='flex items-center space-x-3'>
                                <FaUserPlus className='w-6 h-6 text-blue-500'/>
                                <p>Alice Smith and David Brown have finished a session.</p>
                            </div>
                            <p>11:30am</p>
                        </div>
                    </div>
            </div>
         
)
}

export default Notification