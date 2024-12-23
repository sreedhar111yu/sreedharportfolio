import React, { useState } from 'react';
import './Style/Navbar.css';
import logo from "./../Assets/logo.gif";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰ {/* Hamburger Menu Icon */}
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/activity">Activities</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
