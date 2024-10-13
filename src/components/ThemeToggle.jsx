import React from 'react';
import { CiDark } from 'react-icons/ci'; 
import { GoSun } from 'react-icons/go'; 
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? (
        <GoSun style={{ color: 'white' }} /> 
      ) : (
        <CiDark style={{ color: 'black' }} /> 
      )}
    </button>
  );
};

export default ThemeToggle;

