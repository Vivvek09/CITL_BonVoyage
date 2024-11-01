import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaCog } from 'react-icons/fa';
import axios from 'axios';
import { isTokenExpired, handleTokenExpiration, clearTokens } from '../../auth'; // Adjust the import path as needed
import '../styles/Home.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenExpired()) {
      handleTokenExpiration(navigate, setIsLoggedIn);
    } else {
      setIsLoggedIn(true);
    }

    const interval = setInterval(() => {
      if (isTokenExpired()) {
        handleTokenExpiration(navigate, setIsLoggedIn);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [navigate]);

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      await axios.post('http://localhost:3000/api/logout', { token: refreshToken });
      clearTokens();
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error.response ? error.response.data : error.message);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">BONVOYAGE</div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/hotel">Hotel</Link></li>
        <li><Link to="/guide">Guide</Link></li>
        <li><Link to="/connect">Discover</Link></li>
        <li><Link to="/eventuser">eventuser</Link></li>
        <li><Link to="/streamlit">Recommandation</Link></li>
</ul>
      {isLoggedIn ? (
        <div className="settings-dropdown">
          <button className="settings-btn" onClick={toggleDropdown}>
            <FaCog size={24} /> {/* Settings icon */}
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button className="login-btn" onClick={() => navigate('/login')}>
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;