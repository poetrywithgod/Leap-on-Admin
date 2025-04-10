import React from 'react'
import Card from './Card'
import { FaBox, FaShoppingCart, FaUsers } from 'react-icons/fa'
import {dataM } from '../assets/chartData'
import { Bar } from 'react-chartjs-2'
import Calendar from './Calendar'
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import PieChartWithLabels from './Piechart'
import DonutChart from './DonutChart'
import { FaCircleCheck } from "react-icons/fa6";
import { PiHandshakeFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";



ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

const Dashboard = () => {
    return (
    <div className='w-full h-auto '>
        <div className='flex w-full space-x-3'>
            <div className='grow px-8 w-2/3'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-6'>
                    <Card icon={<FaShoppingCart />} title="Total Mentee" value="140"/>
                    <Card icon={<FaBox />} title="Complete Session" value="120"/>
                    <Card icon={<FaUsers />} title="New Applicant" value="30"/>
                </div>
                <div className=''>
                    <div className='bg-white p-1 dark:bg-gray-800  shadow-md'>
                        <h3 className='text-lg font-semibold mb-4'></h3>
                        <Bar data={dataM} />
                    </div>
                </div>  
            </div>
            <div className='w-[40%] hidden lg:inline bg-white dark:bg-gray-800 pt-5 px-5'>
                <Calendar />
            </div>
        </div>
            <div className='flex mt-10 w-full space-x-3'>
                <div className='grow px-8 w-2/3 space-y-5'>
                    <PieChartWithLabels/> 
                    <DonutChart/> 
                </div>
                <div className='w-[40%] hidden lg:inline bg-white dark:bg-gray-800 mt-3 h-auto pt-5 px-5'>
                    <h1 className='text-xl'> Notifications</h1>
                    <div className='pt-8 pl-5 text-sm flex items-center space-x-4'>
                        <FaCircleCheck className='w-6 h-6 text-green-500'/>
                        <div>
                            <p>9:30am</p>
                        <p>Alice Smith and David Brown have finished a session.</p>
                        </div>
                    </div>
                    <div className='pt-8 pl-5 text-sm flex items-center space-x-4'>
                        <PiHandshakeFill className='w-6 h-6 text-orange-500'/>
                        <div>
                            <p>11:30am</p>
                        <p>Alice Smith and David Brown have finished a session.</p>
                        </div>
                    </div>
                    
                    <div className='pt-8 pl-5 text-sm flex items-center space-x-4'>
                        <FaUserPlus className='w-6 h-6 text-blue-500'/>
                        <div>
                            <p>11:30am</p>
                        <p>Alice Smith and David Brown have finished a session.</p>
                        </div>
                    </div>
                </div>
            </div>    
    </div>
  )
}

export default Dashboard