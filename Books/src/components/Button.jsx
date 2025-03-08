import React from 'react';
const Button = ({ text, onClick, customClass }) => {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all ${customClass}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  