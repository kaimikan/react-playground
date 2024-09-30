import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import CardGrid from './components/CardGrid';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [message, setMessage] = useState(''); // New state for displaying messages

  // Helper function to capitalize the first letter of a name
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  // Fetch Pokemon data from API
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=10'
      );
      const data = await response.json();
      setCards(
        data.results.map((pokemon, index) => ({
          id: index,
          name: capitalizeFirstLetter(pokemon.name), // Capitalize the name here
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }))
      );
    };
    fetchCards();
  }, []);

  const shuffleCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id) => {
    // Check if the card has been clicked before
    if (clickedCards.includes(id)) {
      setMessage('Wrong guess! Try again!'); // Display wrong guess message
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      const newScore = currentScore + 1;
      setClickedCards([...clickedCards, id]);
      setCurrentScore(newScore);
      setMessage(''); // Reset message

      // Check if the user has guessed all cards correctly
      if (newScore === cards.length) {
        setMessage('You guessed all cards correctly! Congratulations!');
        setClickedCards([]); // Reset after correct guesses
        setCurrentScore(0);
      }

      // Update the best score
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }

    setCards(shuffleCards(cards)); // Shuffle cards on every click
  };

  return (
    <div className="app">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <p
        className={`message ${
          message.includes('Congratulations') ? 'success' : ''
        }`}
      >
        {message}
      </p>{' '}
      {/* Display message */}
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default App;
