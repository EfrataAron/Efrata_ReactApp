
import React from 'react';

const BookCard = ({ title, author, description, coverImage }) => {
  return (
    <div className="book-card">
      <img src={coverImage} alt={`Cover of ${title}`} className="book-image" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>
      <button className="book-button">Read More</button>
    </div>
  );
};

export default BookCard;