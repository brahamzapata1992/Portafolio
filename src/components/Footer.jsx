import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaEnvelope } from 'react-icons/fa'; // Importa los íconos que necesitas
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav-icons">
        <Link to="/"><FaHome /></Link>  
        <Link to="/about"><FaUser /></Link>  
        <Link to="/projects"><FaFolder /></Link>  
        <Link to="/contact"><FaEnvelope /></Link>  
      </div>
    </footer>
  );
};


export default Footer;
