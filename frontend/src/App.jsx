import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Wardrobe from './pages/Wardrobe';
import Navbar from './components/Navbar'; // Import it here!
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> {/* Place it above Routes so it's always there */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
      </Routes>
    </Router>
  );
}
