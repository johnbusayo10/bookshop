import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../assets/kola/WhatsApp Image 2024-04-22 at 08.29.39_1c490e48.jpg"

const Navbar = () => {
 
 // NavigationMenu.js

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navigation-menu">
      <div className="logo">
      <Link to="/">
        <div className="w-10 flex flex-col items-center justify-center rounded-full"><img src={logo} alt="logo image" className=' rounded-full' />
        </div>
        </Link>
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
           <Link to="/"> <a href="/">Home</a></Link>
            </li>
          <li>
            <Link to="/about"><a href="/about">About Us</a></Link>
          </li>
          <li>
            <Link to="/service"> <a href="/service">Services</a> </Link>
          </li>
      
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </div>
  );
};


export default Navbar