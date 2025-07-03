import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional for styles

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">QuickCare</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/user-home">User</Link>
        <Link to="/admin-home">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
