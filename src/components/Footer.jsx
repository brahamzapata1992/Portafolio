import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="nav-icons">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <FaHome />
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          <FaUser />
        </Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          <FaFolder />
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          <FaEnvelope />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

