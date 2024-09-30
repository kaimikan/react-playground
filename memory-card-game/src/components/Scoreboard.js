import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <div>Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;
