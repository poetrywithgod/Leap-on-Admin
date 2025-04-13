import React, { useState, useEffect } from 'react';

const Schedule = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Enhanced events with people data
  const events = [
    { date: '1', title: 'Team Meeting', type: 'personal-development', people: ['Jane Sim', 'John Blake'] },
    { date: '3', title: 'Project Review', type: 'academics', people: ['Alice Smith', 'Bob Johnson'] },
    { date: '4', title: 'Mentorship', type: 'discipleship', people: ['Charlie Brown'] },
    { date: '5', title: 'Workshop', type: 'personal-development', people: ['Diana Prince', 'Ethan Hunt'] },
    { date: '6', title: 'Client Call', type: 'business', people: ['Frank Ocean', 'Grace Hopper'] },
    { date: '7', title: 'Career Planning', type: 'career-development', people: ['Harry Potter'] },
    { date: '9', title: 'Training Session', type: 'personal-development', people: ['Ivy League', 'Jack Sparrow'] },
    { date: '10', title: 'Research', type: 'academics', people: ['Kevin Mitnick'] },
    { date: '12', title: 'Seminar', type: 'personal-development', people: ['Lara Croft', 'Mike Tyson'] },
    { date: '13', title: 'Networking', type: 'business', people: ['Nancy Drew'] },
    { date: '14', title: 'Interview Prep', type: 'career-development', people: ['Oliver Twist', 'Peter Pan'] },
    { date: '16', title: 'Coaching', type: 'personal-development', people: ['Queen Latifah'] },
    { date: '17', title: 'Study Group', type: 'discipleship', people: ['Robert Downey', 'Steve Jobs'] },
    { date: '20', title: 'Performance Review', type: 'career-development', people: ['Tony Stark', 'Uma Thurman'] },
  ];

  const [currentDate, setCurrentDate] = useState(new Date(2025, 3));
  const [showModal, setShowModal] = useState(false);
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [darkMode, setDarkMode] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handlePreviousMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  const handleDateClick = () => {
    setSelectedYear(currentDate.getFullYear());
    setSelectedMonth(currentDate.getMonth());
    setShowModal(true);
  };

  const handleSetDate = () => {
    setCurrentDate(new Date(selectedYear, selectedMonth));
    setShowModal(false);
  };

  const toggleDayExpand = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const totalCells = Math.ceil((daysInMonth + startDay) / 7) * 7;
  const daysArray = Array.from({ length: totalCells }).map((_, i) => {
    const day = i - startDay + 1;
    return {
      day: day > 0 && day <= daysInMonth ? day : null,
      isCurrentMonth: day > 0 && day <= daysInMonth
    };
  });

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const eventClasses = {
    'personal-development': 'bg-orange-100 dark:bg-orange-900 border-orange-200 dark:border-orange-700',
    'academics': 'bg-blue-100 dark:bg-blue-900 border-blue-200 dark:border-blue-700',
    'discipleship': 'bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700',
    'business': 'bg-purple-100 dark:bg-purple-900 border-purple-200 dark:border-purple-700',
    'career-development': 'bg-yellow-100 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-700'
  };

  return (
    <div className="p-4 font-sans relative min-h-screen w-full transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="flex justify-between items-center mb-6">
        <h1 
          className="text-2xl font-bold cursor-pointer"
          onClick={handleDateClick}
        >
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h1>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
          
          </button>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600">
              Day
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600">
              Week
            </button>
            <button className="px-4 py-2 border rounded-lg bg-orange-500 text-white dark:bg-orange-600">
              Month
            </button>
          </div>
        </div>
      </header>

      <div className="flex justify-between mb-4">
        <button 
          onClick={handlePreviousMonth} 
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
        >
          Previous
        </button>
        <button 
          onClick={handleNextMonth} 
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 border-t border-l rounded-lg overflow-hidden dark:border-gray-700">
        {days.map((day, index) => (
          <div 
            key={index} 
            className="py-2 px-4 border-b border-r font-medium text-center bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          >
            {day}
          </div>
        ))}

        {daysArray.map((dayObj, index) => {
          const event = dayObj.day ? events.find(e => e.date === dayObj.day.toString()) : null;
          return (
            <div
              key={index}
              className={`min-h-28 p-2 border-b border-r flex flex-col justify-start space-y-1
                ${dayObj.isCurrentMonth ? '' : 'bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500'}
                ${isToday(dayObj.day) ? 'bg-blue-50 dark:bg-blue-900' : ''}
                dark:border-gray-700`}
              onClick={() => dayObj.day && toggleDayExpand(dayObj.day)}
            >
              {dayObj.day && (
                <>
                  <span className={`font-bold ${isToday(dayObj.day) ? 'text-blue-600 dark:text-blue-300' : ''}`}>
                    {dayObj.day}
                  </span>
                  {event && (
                    <div className={`mt-1 p-2 rounded border ${eventClasses[event.type]}`}>
                      <p className="text-sm font-semibold">{event.title}</p>
                      {expandedDay === dayObj.day && (
                        <div className="mt-1 text-xs">
                          <p className="font-medium">Attendees:</p>
                          <ul className="list-disc list-inside">
                            {event.people.map((person, i) => (
                              <li key={i}>{person}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Set Date</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Year:</label>
              <input
                type="number"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Month:</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <option key={index} value={index}>
                    {new Date(0, index).toLocaleString('default', { month: 'long' })}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSetDate}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Set Date
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;