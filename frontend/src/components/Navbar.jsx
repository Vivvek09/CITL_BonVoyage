import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BONVOYAGE</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hotel">Hotel</Link></li>
        <li><Link to="/guide">Guide</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/itinerary">Itinerary</Link></li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;