import React from 'react';
const Card = ({ title, content, customClass }) => {
    return (
      <div className={`bg-gray-100 shadow-md rounded-lg p-6 ${customClass}`}>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{content}</p>
      </div>
    );
  };
  
  export default Card;
  