import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThemeContextProvider from './context/ThemeContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Setting from './components/Setting';
function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <div className='flex'>
          <Sidebar />
          <div className='grow ml-16 md:ml-48 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
            <Navbar />
            <div className="p-4"> {/* Add some padding to the content area */}
              <Routes>
                <Route path="/" element={<Dashboard />} /> {/* Default route */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/setting" element={<Setting />} />
                {/* Add more routes for your other pages */}
              </Routes>
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;