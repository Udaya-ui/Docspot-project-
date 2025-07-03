import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Optional: for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to QuickCare Hospital</h1>
      <p>Book your doctor appointments quickly and easily.</p>

      <nav className="nav-buttons">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
        <Link to="/admin-home"><button>Admin Dashboard</button></Link>
        <Link to="/user-home"><button>User Dashboard</button></Link>
      </nav>
    </div>
  );
}

export default Home;
