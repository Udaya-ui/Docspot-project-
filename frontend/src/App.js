import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Common pages
import Home from './components/common/home';
import Login from './components/common/login';
import Register from './components/common/register';

// Admin pages
import AdminHome from './components/admin/AdminHome.jsx';
import AdminAppointments from './components/admin/AdminAppointments.jsx';

// User pages
import UserHome from './components/user/UserHome';
import UserAppointments from './components/user/UserAppointments';

function App() {
  return (
    <Router>
      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin-appointments" element={<AdminAppointments />} />

        {/* User Routes */}
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/user-appointments" element={<UserAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;
