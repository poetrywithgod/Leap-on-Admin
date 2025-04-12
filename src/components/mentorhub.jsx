import React, { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiTrash2,
  FiAlertTriangle,
} from "react-icons/fi";

const MentorHub = () => {
  // Dummy mentor data
  const dummyMentors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      email: "sarah.johnson@example.com",
      expertise: "Career Development",
      specialization: "Leadership Coaching",
      company: "Growth Partners Inc.",
      registrationDate: "2023-11-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      email: "michael.r@example.com",
      expertise: "Technology",
      specialization: "Software Engineering",
      company: "Tech Innovations LLC",
      registrationDate: "2024-01-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Emily Chen",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      email: "emily.chen@example.com",
      expertise: "Business Strategy",
      specialization: "Startup Consulting",
      company: "Strategic Minds Co.",
      registrationDate: "2023-09-10",
      status: "On Leave",
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      email: "david.wilson@example.com",
      expertise: "Healthcare",
      specialization: "Medical Career Paths",
      company: "Health Mentors Network",
      registrationDate: "2024-02-05",
      status: "Active",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      email: "lisa.thompson@example.com",
      expertise: "Marketing",
      specialization: "Digital Marketing",
      company: "Brand Elevation",
      registrationDate: "2023-12-18",
      status: "Inactive",
    },
  ];

  // State management
  const [mentors] = useState(dummyMentors);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [mentorToAction, setMentorToAction] = useState(null);
  const [checkedMentors, setCheckedMentors] = useState([]);
  const itemsPerPage = 5;

  // Format date to "Month Day, Year" format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate pagination
  const totalPages = Math.ceil(mentors.length / itemsPerPage);
  const paginatedMentors = mentors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setSelectedMentor(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate visible page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  // Handle mentor selection
  const handleMentorSelect = (mentorId) => {
    setSelectedMentor(selectedMentor === mentorId ? null : mentorId);
  };

  // Toggle checkbox selection
  const toggleCheckbox = (mentorId, e) => {
    e.stopPropagation();
    setCheckedMentors(prev =>
      prev.includes(mentorId)
        ? prev.filter(id => id !== mentorId)
        : [...prev, mentorId]
    );
  };

  // Open suspend modal
  const openSuspendModal = (mentor) => {
    setMentorToAction(mentor);
    setShowSuspendModal(true);
  };

  // Open delete modal
  const openDeleteModal = (mentor) => {
    setMentorToAction(mentor);
    setShowDeleteModal(true);
  };

  // Handle suspend action
  const handleSuspend = () => {
    console.log(`Suspending mentor: ${mentorToAction.name}`);
    setShowSuspendModal(false);
    setSelectedMentor(null);
  };

  // Handle delete action
  const handleDelete = () => {
    console.log(`Deleting mentor: ${mentorToAction.name}`);
    setShowDeleteModal(false);
    setSelectedMentor(null);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      {/* Suspend Modal */}
      {showSuspendModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
            <div className="flex flex-col mb-4 mt-10">
              <div className="items-center pl-10">
                <div>
                  <FiPause className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Suspend mentor
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2 pl-10">
                This action can't be undone.
              </p>
              <div className="flex justify-start pl-10 space-x-3">
                <button
                  onClick={() => setShowSuspendModal(false)}
                  className="px-4 py-2 bg-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSuspend}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                >
                  Suspend
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
            <div className="flex flex-col mt-10 mb-4">
              <div className="items-center pl-10">
                <div>
                  <FiTrash2 className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Delete mentor
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2 pl-10">
                This action can't be undone.
              </p>
              <div className="flex justify-start pl-10 space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 tracking-wider">
                Mentor
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 tracking-wider">
                Expertise
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 tracking-wider">
                Company
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 tracking-wider">
                Registration date
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {paginatedMentors.map((mentor) => (
              <tr
                key={mentor.id}
                className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 ${
                  selectedMentor === mentor.id ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                onClick={() => handleMentorSelect(mentor.id)}
              >
                <td className={`px-6 py-4 whitespace-nowrap transition-all duration-300 ${
                  selectedMentor === mentor.id ? "-translate-x-4" : ""
                }`}>
                  <div className="flex items-center">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="h-10 w-10 rounded-full border-2 border-gray-200 dark:border-gray-600"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {mentor.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {mentor.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap transition-all duration-300 ${
                  selectedMentor === mentor.id ? "-translate-x-4" : ""
                }`}>
                  <div className="text-sm text-gray-900 dark:text-white">
                    {mentor.expertise}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {mentor.specialization}
                  </div>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 transition-all duration-300 ${
                  selectedMentor === mentor.id ? "-translate-x-4" : ""
                }`}>
                  {mentor.company}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 transition-all duration-300 ${
                  selectedMentor === mentor.id ? "-translate-x-4" : ""
                }`}>
                  {formatDate(mentor.registrationDate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end items-center">
                    <div className="flex items-center mr-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${mentor.status === "Active" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                          : mentor.status === "On Leave"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`}
                      >
                        {mentor.status}
                      </span>
                      <input
                        type="checkbox"
                        checked={checkedMentors.includes(mentor.id)}
                        onChange={(e) => toggleCheckbox(mentor.id, e)}
                        className="h-4 w-4 text-orange-600 dark:text-orange-400 rounded border-gray-300 dark:border-gray-600 focus:ring-orange-500 dark:focus:ring-orange-600 ml-2"
                      />
                    </div>
                    <button
                      className={`text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 ml-4 transition-all duration-300 ${
                        selectedMentor === mentor.id ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
                      }`}
                      title="Suspend account"
                      onClick={(e) => {
                        e.stopPropagation();
                        openSuspendModal(mentor);
                      }}
                    >
                      <FiPause className="inline" />
                    </button>
                    <button
                      className={`text-red-600 dark:text-red-400 hover:text-red-800 ml-4 transition-all duration-300 ${
                        selectedMentor === mentor.id ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
                      }`}
                      title="Delete account"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDeleteModal(mentor);
                      }}
                    >
                      <FiTrash2 className="inline" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Centered Pagination */}
      {mentors.length > 0 && (
        <div className="bg-white dark:bg-gray-800 px-4 py-3 flex justify-center border-t border-gray-200 dark:border-gray-700">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border ${
                currentPage === 1
                  ? "bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              } border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-300`}
            >
              <span className="sr-only">Previous</span>
              <FiChevronLeft className="h-5 w-5" />
            </button>

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 border ${
                  currentPage === page
                    ? "z-10 bg-orange-50 dark:bg-orange-900/30 border-orange-500 text-orange-600 dark:text-orange-300"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {page}
              </button>
            ))}

            {totalPages > getPageNumbers()[getPageNumbers().length - 1] && (
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                ...
              </span>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border ${
                currentPage === totalPages
                  ? "bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              } border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-300`}
            >
              <span className="sr-only">Next</span>
              <FiChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MentorHub;