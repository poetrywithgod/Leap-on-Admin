import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThemeContextProvider from './context/ThemeContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Setting from './components/Setting';
import MenteeHub from './components/menteehub';
import MentorHub from './components/mentorhub';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <div className='flex'>
          <Sidebar />
          <div className='grow ml-16 md:ml-48 h-full lg:h-sreen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
            <Navbar />
            <div className="p-4"> {/* Main content area with padding */}
              <Routes>
                {/* Default dashboard route */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Mentorship hub routes */}
                <Route path="/menteehub" element={<MenteeHub />} />
                <Route path="/mentorhub" element={<MentorHub />} />
                
                {/* Settings route */}
                <Route path="/setting" element={<Setting />} />
                
                {/* Add a 404 catch-all route */}
                <Route path="*" element={<div className="p-6 text-center">Page Not Found</div>} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;