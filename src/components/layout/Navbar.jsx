import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Accessories</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
};

export default Navbar;
