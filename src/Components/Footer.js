
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../assets/kola/WhatsApp Image 2024-04-22 at 08.29.39_1c490e48.jpg"




const Footer = () => {
 
 // NavigationMenu.js

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navigation-menu flex lg:flex-row sm:flex-col justify-around items-center">
      <a href="mailto:ayab20200@gmail.com"><p className=' text-xs lg:text-base'>Gmail:
      ayab20200@gmail.com</p></a>
      <p className=' text-xs lg:text-base'>Pohne number: +234 701 341 1817</p>
    </div>
  );
};


export default Footer