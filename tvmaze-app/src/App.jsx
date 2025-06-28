import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
  return (
    <div className="min-h-screen bg-pink-100 text-gray-800 font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
