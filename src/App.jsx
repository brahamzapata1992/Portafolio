import './App.css';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Link, useLocation } from 'react-router-dom';
import Home from './Components/home/Home';
import Button from './utilities/Button';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import { CiDark } from 'react-icons/ci';
import { GoSun } from 'react-icons/go';
import { IoHomeSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [isLuminoso, setIsLuminoso] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsLuminoso(!isLuminoso);
  };

  const nombreClaseBackground = isLuminoso ? 'ComponentePrincipalBackgroundDark' : 'ComponentePrincipalBackgroundLigth';
  const nombreClaseRoute = location.pathname === '/About' || location.pathname === '/Portfolio' || location.pathname === '/Contact'
    ? (isLuminoso ? 'ComponenteRouteBackgroundWhite' : 'ComponenteRouteBackground')
    : '';

  return (
    <div className={`FondoPrinciaplApp ${nombreClaseBackground} ${nombreClaseRoute}`}>
      <Button onClick={handleClick}>
        {isLuminoso ? <GoSun className="icon-white"/> : <CiDark  />}
      </Button>
      <button className="round-button-home"><Link to='/'><IoHomeSharp /></Link></button>
      <button className="round-button-about"><Link to='/About'><FaUserAlt /></Link></button>
      <button className="round-button-portfolio"><Link to='/Portfolio'><FaBriefcase /></Link></button>
      <button className="round-button-contact"><Link to='/Contact'><MdEmail /></Link></button>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
