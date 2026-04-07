import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Wardrobe from './pages/Wardrobe';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Analytics from './pages/dashboard/Admin/Analytics';
import SystemLogs from './pages/dashboard/Admin/SystemLogs';
import AdminDashboard from './pages/dashboard/Admin/AdminDashboard';
import Staff from './pages/dashboard/Admin/Staff';
import Inventory from './pages/dashboard/Admin/Inventory';
import Product from './pages/dashboard/Admin/Product';

function NavbarVisibility() {
  const location = useLocation();
  // Define paths where the global site Navbar should be hidden
  const dashboardPaths = ['/admin', '/staff', '/wardrobe'];
  const isDashboard = dashboardPaths.some(path => location.pathname.startsWith(path));

  if (isDashboard) return null;
  return <Navbar />;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarVisibility />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate to="/admin/analytics" replace />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="products" element={<Product />} />
          <Route path="staff" element={<Staff />} />
          <Route path="marketing" element={<div className="p-10 text-stone-400">Marketing Module Coming Soon...</div>} />
          <Route path="logs" element={<SystemLogs />} />
        </Route>
      </Routes>
    </Router>
  );
}
