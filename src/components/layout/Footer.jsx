import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} LUXE Accessories. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
