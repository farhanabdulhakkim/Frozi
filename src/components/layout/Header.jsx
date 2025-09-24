import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Header.scss';

// --- STEP 1: Delete the SVG import ---
// import logoSvg from '../../assets/images/download.svg'; // This is no longer needed

const Header = () => {
  return (
    <header className="app-header">
      {/* STEP 2: Use a direct string path in the src attribute */}
      <Link to="/" className="logo-link">
        <img src="/images/download.svg" alt="LUXE Logo" className="logo-image" />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
