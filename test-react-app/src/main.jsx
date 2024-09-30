import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Greeting from './components/Greeting.jsx';
import TodoList from './components/TodoList.jsx';
import Person from './components/Person.jsx';
import CustomInput from './components/CustomInput.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <TodoList />
    <Person />
    <CustomInput />
  </StrictMode>
);
