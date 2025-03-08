import React from 'react';
const ProfileCard = ({ name, bio, avatarUrl }) => {
    return (
      <div className="font-serif bg-emerald-300 shadow-lg rounded-lg p-6 max-w-sm mx-auto">
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="w-40 h-50 object-cover rounded-t-md mx-auto"
        />
        <h2 className="text-xl font-semibold text-center mt-4">{name}</h2>
        <p className="text-gray-600 text-center mt-2">{bio}</p>
      </div>
    );
  };
  
  export default ProfileCard;
  