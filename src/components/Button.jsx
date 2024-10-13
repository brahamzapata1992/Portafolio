import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Button.css';

const Button = ({ text }) => { 
    const { darkMode } = useTheme(); 

    return (
        <button className="download-button">
            {text} 
        </button>
    );
};

export default Button;
