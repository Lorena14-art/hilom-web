import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Wardrobe from './Wardrobe';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
        </Routes>
      </div>
    </Router>
  );
}
