import React from 'react';
import Card from './Card';
import '../styles/CardGrid.css';

const CardGrid = ({ cards, onCardClick }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardGrid;
