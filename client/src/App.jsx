import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// import other pages as needed
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add other routes below */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
