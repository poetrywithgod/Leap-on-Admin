import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'; // Or your preferred locale
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.locale('en-gb'); // Set the locale

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());

    const month = currentDate.format('MMMM YYYY');
    const firstDayOfMonth = currentDate.startOf('month');
    const lastDayOfMonth = currentDate.endOf('month');
    const firstDayOfCalendar = firstDayOfMonth.startOf('week'); // Adjust for your week start
    const lastDayOfCalendar = lastDayOfMonth.endOf('week');   // Adjust for your week end
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const totalDays = lastDayOfCalendar.diff(firstDayOfCalendar, 'day') + 1;
    const daysArray = [];
    for (let i = 0; i < totalDays; i++) {
        daysArray.push(firstDayOfCalendar.add(i, 'day'));
    }

    const isSameDay = (date1, date2) => date1.isSame(date2, 'day');

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    };


    return (
        <div className='h-auto'>
         <h1 className='pb-3 font-bold'>Schedule</h1>
       
        <div className="w-full mx-auto border rounded-md shadow-md font-sans bg-[#96E2D6]">
            <div className="flex justify-between items-center pt-3">
                <button onClick={handlePrevMonth} className="focus:outline-none hover:bg-gray-200 rounded-md px-2">
                    &lt;
                </button>
                <h2 className="text-lg font-semibold">{month}</h2>
                <button onClick={handleNextMonth} className="focus:outline-none hover:bg-gray-200 rounded-md px-2">
                    &gt;
                </button>
            </div>
            <div className="grid grid-cols-7 text-center py-1">
                {daysOfWeek.map((day) => (
                    <div key={day} className="font-medium text-gray-900">{day}</div>
                ))}
            </div>
            
            <div className="rounded-b-md pb-2">
                <div className="grid grid-cols-7 text-center">
                    {daysOfWeek.map((_, index) => {
                        const dayOfCurrentWeek = dayjs().startOf('week').add(index, 'day');
                        return (
                            <div
                                key={dayOfCurrentWeek.toString()}
                                className={`py-3 text-sm font-bold rounded-full
                                           ${isSameDay(dayOfCurrentWeek, dayjs()) ? 'bg-orange-50 text-gray-900 font-bold' : 'text-gray-900'}`}
                            >
                                {dayOfCurrentWeek.format('D')}
                            </div>
                        );
                    })}
                </div>
                </div>
            </div>
            <div className='flex items-center justify-between pt-8 space-x-3'>
                <div className="flex space-x-3">
                    <div>10:30am</div>
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-gray-500 mb-2"></div>
                        <div className="h-6 border-l-2 border-dotted border-gray-500"></div>
                    </div>
                </div>
                <div className='bg-purple-200 text-gray-900 py-2 px-5 rounded-md text-sm'>
                    <p>Personal Development</p>
                    <p>Blake Jones & Mary Peters</p>
                </div>
            </div>
        </div>
    );
};

export default Calendar;