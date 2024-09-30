import React, { useState } from 'react';
import './App.css';

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Button({
  text = 'Click Me!',
  color = 'blue',
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px',
  };

  return (
    <button
      onClick={() => handleClick('https://www.theodinproject.com')}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const animals = [];
  // const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h1>Animals: </h1>
      <List animals={animals} />
      <Button handleClick={handleButtonClick} />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />

      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
