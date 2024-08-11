import React from 'react';
import './Button.css'


const Button = ({ onClick, children }) => {
  return (
    <button className="round-button" onClick={onClick}>
      {children} 
    </button>
  );
};

export default Button;