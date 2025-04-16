import React, { useState, useRef, useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { PiHandshakeFill } from "react-icons/pi";
import { FaUserPlus, FaTrash } from "react-icons/fa6";
import { IoFunnelOutline } from "react-icons/io5";

// remove the mock data when implementing the Api
const initialNotifications = [
  { id: 1, type: 'success', message: 'Alice Smith and David Brown have finished a session.', time: '9:30am', date: 'Today' },
  { id: 2, type: 'meeting', message: 'Reminder: Meeting with the team at 11:00am.', time: '11:30am', date: 'Today' },
  { id: 3, type: 'user', message: 'New user John Doe has joined the platform.', time: '11:30am', date: 'Today' },
  { id: 4, type: 'success', message: 'Project Alpha deployment successful.', time: '9:30am', date: 'Yesterday' },
  { id: 5, type: 'meeting', message: 'Follow-up meeting scheduled for tomorrow.', time: '11:30am', date: 'Yesterday' },
  { id: 6, type: 'user', message: 'Welcome aboard, Jane Miller!', time: '11:30am', date: 'Yesterday' },
  { id: 7, type: 'success', message: 'Database backup completed successfully.', time: '9:30am', date: 'Old Message' },
  { id: 8, type: 'meeting', message: 'Planning session for Q3 next week.', time: '11:30am', date: 'Old Message' },
  { id: 9, type: 'user', message: 'User activity report generated.', time: '11:30am', date: 'Old Message' },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [notificationToDelete, setNotificationToDelete] = useState(null);
  const [filterType, setFilterType] = useState('');
  const filterModalRef = useRef(null);

  const openDeleteModal = (notificationId) => {
    setNotificationToDelete(notificationId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setNotificationToDelete(null);
  };

  const handleDeleteNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
    closeDeleteModal();
    // In a real application, you would also make an API call to delete the notification from the server.
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <FaCircleCheck className='w-6 h-6 text-green-500' />;
      case 'meeting':
        return <PiHandshakeFill className='w-6 h-6 text-orange-500' />;
      case 'user':
        return <FaUserPlus className='w-6 h-6 text-blue-500' />;
      default:
        return null;
    }
  };

  const formatDate = (date) => {
    return <h2 className='pt-2 px-2'>{date}</h2>;
  };

  const filteredNotifications = filterType
    ? notifications.filter(notification => notification.type === filterType)
    : notifications;

  const groupedNotifications = filteredNotifications.reduce((acc, notification) => {
    if (!acc[notification.date]) {
      acc[notification.date] = [];
    }
    acc[notification.date].push(notification);
    return acc;
  }, {});

  const handleFilterChange = (type) => {
    setFilterType(type);
    setIsFilterModalOpen(false); // Close the modal after selecting a filter
  };

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  // Close the filter modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterModalRef.current && !filterModalRef.current.contains(event.target)) {
        setIsFilterModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterModalRef]);

  return (
    <div className='w-full px-5 h-auto'>
      <div className='flex items-center justify-end pb-5'>
        <div className="relative">
          <IoFunnelOutline className="cursor-pointer text-xl font-bold text-orange-500" onClick={toggleFilterModal} />
          {isFilterModalOpen && (
            <div ref={filterModalRef} className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md z-10">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <button
                    onClick={() => handleFilterChange('')}
                    className="block px-4 py-2 w-full text-left  font-bold hover:bg-gray-400 dark:hover:bg-orange-500 focus:outline-none"
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterChange('success')}
                    className="block px-4 py-2 w-full text-left font-bold hover:bg-gray-400 dark:hover:bg-orange-500 focus:outline-none"
                  >
                    Success
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterChange('meeting')}
                    className="block px-4 py-2 w-full text-left font-bold hover:bg-gray-400 dark:hover:bg-orange-500 focus:outline-none"
                  >
                    Meeting
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterChange('user')}
                    className="block px-4 py-2 w-full text-left font-bold hover:bg-gray-400 dark:hover:bg-orange-500 focus:outline-none"
                  >
                    User
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='flex items-center justify-between text-lg bg-white dark:bg-gray-800 p-5'>
        <h1 className=''> Notifications</h1>
      </div>

      <div className='space-y-5 mt-5'>
        {Object.keys(groupedNotifications).map(date => (
          <div key={date}>
            {formatDate(date)}
            {groupedNotifications[date].map(notification => (
              <div
                key={notification.id}
                className='p-5 text-sm flex items-center justify-between bg-white dark:bg-gray-800'
              >
                <div className='flex items-center space-x-3'>
                  {getIcon(notification.type)}
                  <p>{notification.message}</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <p>{notification.time}</p>
                  <button
                    onClick={() => openDeleteModal(notification.id)}
                    className='text-red-500 hover:text-red-700 focus:outline-none'
                  >
                    <FaTrash className='w-4 h-4' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && notificationToDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Confirm Delete</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Are you sure you want to delete this notification?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-500 text-gray-700 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteNotification(notificationToDelete)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;