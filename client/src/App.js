import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBarHeader } from './Components/NavBarHeader';
import { isAuthenticated } from './authUtils'; // Import your isAuthenticated function
import { AppRoutes } from './Routes';
 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Router>
        <NavBarHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/*" element={<AppRoutes isAuthenticated={isAuthenticated} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


