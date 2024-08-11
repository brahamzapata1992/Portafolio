import './App.css';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Link, useLocation } from 'react-router-dom';
import Home from './Components/home/Home';
import Button from './utilities/Button';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  const [isLuminoso, setIsLuminoso] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsLuminoso(!isLuminoso);
    console.log('cambio el estado');
  };

  const iconButton = () => {
    return isLuminoso ? 'encender luz' : 'apagar luz';
  };

  const nombreClaseBackground = isLuminoso ? 'ComponentePrincipalBackgroundDark' : 'ComponentePrincipalBackgroundLigth';
  const nombreClaseAbout = location.pathname === '/About' 
    ? (isLuminoso ? 'ComponenteRouteBackgroundWhite' : 'ComponenteRouteBackground') 
    : '';
  const nombreClasePortfolio = location.pathname === '/Portfolio' 
    ? (isLuminoso ? 'ComponenteRouteBackgroundWhite' : 'ComponenteRouteBackground') 
    : '';
  const nombreClaseContact = location.pathname === '/Portfolio' 
    ? (isLuminoso ? 'ComponenteRouteBackgroundWhite' : 'ComponenteRouteBackground') 
    : '';
  

  return (
    <div className={`FondoPrinciaplApp ${nombreClaseBackground} ${nombreClaseAbout} ${nombreClasePortfolio} ${nombreClaseContact}`}>
      <Button onClick={handleClick}>
        {iconButton()}
      </Button>
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/About'>About</Link></button>
      <button><Link to='/Portfolio'>Portfolio</Link></button>
      <button><Link to='/Contact'>Contact</Link></button>
      
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
