import React from 'react';
import '../styles/Card.css';

const Card = ({ card, onClick }) => {
  const handleClick = () => {
    onClick(card.id);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={card.image} alt={card.name} />
      <div className="card-name">{card.name}</div>
    </div>
  );
};

export default Card;
