import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  FaCheck, 
  FaTimes, 
  FaUserTie, 
  FaCertificate, 
  FaSearch,
  FaUserCircle,
  FaUserShield,
  FaUserSlash
} from 'react-icons/fa';
import { MdPendingActions } from 'react-icons/md';

const PendingRequests = () => {
    const { t } = useLanguage();
    const [requests, setRequests] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTab, setSelectedTab] = useState('pending');
    const [isLoading, setIsLoading] = useState(true);

    // Mock data with user photos
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const mockRequests = [
                    {
                        id: 1,
                        name: 'John Doe',
                        email: 'john@example.com',
                        expertise: 'Software Engineering',
                        status: 'pending',
                        applicationDate: '2023-05-15',
                        photo: 'https://randomuser.me/api/portraits/men/1.jpg'
                    },
                    {
                        id: 2,
                        name: 'Jane Smith',
                        email: 'jane@example.com',
                        expertise: 'Product Management',
                        status: 'pending',
                        applicationDate: '2023-05-18',
                        photo: 'https://randomuser.me/api/portraits/women/1.jpg'
                    },
                    {
                        id: 3,
                        name: 'Robert Johnson',
                        email: 'robert@example.com',
                        expertise: 'Data Science',
                        status: 'needsCertification',
                        applicationDate: '2023-05-10',
                        photo: 'https://randomuser.me/api/portraits/men/2.jpg'
                    },
                    {
                        id: 4,
                        name: 'Emily Davis',
                        email: 'emily@example.com',
                        expertise: 'UX Design',
                        status: 'certified',
                        applicationDate: '2023-04-28',
                        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
                        certifiedDate: '2023-05-05'
                    },
                    {
                        id: 5,
                        name: 'Michael Brown',
                        email: 'michael@example.com',
                        expertise: 'DevOps',
                        status: 'certified',
                        applicationDate: '2023-04-15',
                        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
                        certifiedDate: '2023-04-20'
                    }
                ];
                setRequests(mockRequests);
            } catch (error) {
                console.error('Error fetching requests:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleApprove = (id) => {
        setRequests(requests.map(request => 
            request.id === id ? { ...request, status: 'needsCertification' } : request
        ));
    };

    const handleReject = (id) => {
        setRequests(requests.map(request => 
            request.id === id ? { ...request, status: 'rejected' } : request
        ));
    };

    const handleCertify = (id) => {
        setRequests(requests.map(request => 
            request.id === id ? { 
                ...request, 
                status: 'certified',
                certifiedDate: new Date().toISOString().split('T')[0]
            } : request
        ));
    };

    const handleRevokeCertification = (id) => {
        setRequests(requests.map(request => 
            request.id === id ? { ...request, status: 'needsCertification' } : request
        ));
    };

    const handleSuspend = (id) => {
        setRequests(requests.map(request => 
            request.id === id ? { ...request, status: 'suspended' } : request
        ));
    };

    const filteredRequests = requests.filter(request => {
        const matchesSearch = request.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            request.expertise.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (selectedTab === 'pending') {
            return matchesSearch && request.status === 'pending';
        } else if (selectedTab === 'certification') {
            return matchesSearch && request.status === 'needsCertification';
        } else if (selectedTab === 'certified') {
            return matchesSearch && request.status === 'certified';
        }
        return false;
    });

    return (
        <div className="md:ml-4 min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
            <div className="flex items-center mb-6">
                <MdPendingActions className="text-2xl mr-2 text-orange-500" />
                <h1 className="text-2xl font-bold">{t('Pending Requests')}</h1>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                <button
                    className={`py-2 px-4 font-medium ${selectedTab === 'pending' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setSelectedTab('pending')}
                >
                    {t('Mentor Applications')}
                </button>
                <button
                    className={`py-2 px-4 font-medium ${selectedTab === 'certification' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setSelectedTab('certification')}
                >
                    {t('Certification Requests')}
                </button>
                <button
                    className={`py-2 px-4 font-medium ${selectedTab === 'certified' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setSelectedTab('certified')}
                >
                    {t('Certified Mentors')}
                </button>
            </div>

            {/* Search bar */}
            <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-500 dark:text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder={t('Search requests...')}
                    className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Loading state */}
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                </div>
            ) : (
                <>
                    {/* Empty state */}
                    {filteredRequests.length === 0 && (
                        <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                            <p>{t('No requests found')}</p>
                        </div>
                    )}

                    {/* Requests list */}
                    <div className="grid gap-4">
                        {filteredRequests.map(request => (
                            <div 
                                key={request.id} 
                                className="p-4 rounded-lg shadow-md border-l-4 border-orange-500 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                                        {/* User photo */}
                                        <div className="flex-shrink-0 relative">
                                            {request.photo ? (
                                                <img 
                                                    src={request.photo} 
                                                    alt={request.name}
                                                    className="h-12 w-12 rounded-full object-cover"
                                                />
                                            ) : (
                                                <FaUserCircle className="h-12 w-12 text-gray-400" />
                                            )}
                                            {request.status === 'certified' && (
                                                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full">
                                                    <FaCertificate className="text-xs" />
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div>
                                            <div className="flex items-center">
                                                <FaUserTie className="mr-2 text-gray-600 dark:text-gray-400" />
                                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                                    {request.name}
                                                    {request.status === 'certified' && (
                                                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                                                            Certified
                                                        </span>
                                                    )}
                                                </h3>
                                            </div>
                                            <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{request.email}</p>
                                            <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                                                <span className="font-medium">{t('Expertise')}:</span> {request.expertise}
                                            </p>
                                            <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                                                <span className="font-medium">{t('Applied on')}:</span> {request.applicationDate}
                                            </p>
                                            {request.certifiedDate && (
                                                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                                                    <span className="font-medium">{t('Certified on')}:</span> {request.certifiedDate}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        {selectedTab === 'pending' ? (
                                            <>
                                                <button
                                                    onClick={() => handleApprove(request.id)}
                                                    className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    <FaCheck className="mr-1" />
                                                    {t('Approve')}
                                                </button>
                                                <button
                                                    onClick={() => handleReject(request.id)}
                                                    className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    <FaTimes className="mr-1" />
                                                    {t('Reject')}
                                                </button>
                                            </>
                                        ) : selectedTab === 'certification' ? (
                                            <button
                                                onClick={() => handleCertify(request.id)}
                                                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                            >
                                                <FaCertificate className="mr-1" />
                                                {t('Certify')}
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => handleRevokeCertification(request.id)}
                                                    className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    <FaCertificate className="mr-1" />
                                                    {t('Revoke')}
                                                </button>
                                                <button
                                                    onClick={() => handleSuspend(request.id)}
                                                    className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    <FaUserSlash className="mr-1" />
                                                    {t('Suspend')}
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PendingRequests;