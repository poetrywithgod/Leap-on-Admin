import React from 'react'
import Card from './Card'
import { FaBox, FaShoppingCart, FaUsers } from 'react-icons/fa'
import {dataM } from '../assets/chartData'
import { Bar } from 'react-chartjs-2'
import Calendar from './Calendar'
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import PieChartWithLabels from './Piechart'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

const Dashboard = () => {
    return (
    <div className='w-full h-auto'>
        <div className='flex w-full space-x-3'>
            <div className='grow p-8 pt-20 w-2/3'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-6'>
                    <Card icon={<FaShoppingCart />} title="Total Mentee" value="140"/>
                    <Card icon={<FaBox />} title="Complete Session" value="120"/>
                    <Card icon={<FaUsers />} title="New Applicant" value="30"/>
                </div>
                <div className=''>
                    <div className='bg-white p-1 dark:bg-gray-800 rounded-lg shadow-md'>
                        <h3 className='text-lg font-semibold mb-4'></h3>
                        <Bar data={dataM} />
                    </div>
                </div>  
            </div>
            <div className='w-[40%] border-l border-gray-300 dark:border-gray-600 h-screen pt-16 px-5'>
                <Calendar />
            </div>
        </div>
        <div className='w-full flex h-auto space-x-7 mt-10'>
            <div className='grow p-3 w-2/3'>
                <PieChartWithLabels/> 
                </div>
                <div className='w-[40%] border-l border-gray-300 dark:border-gray-600 h-screen pt-16 px-5'>
                    welcome
                </div>
        </div>
    </div>
  )
}

export default Dashboard