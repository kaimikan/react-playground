import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Greeting from './components/Greeting.jsx';
import TodoList from './components/TodoList.jsx';
import Person from './components/Person.jsx';
import CustomInput from './components/CustomInput.jsx';
import Clock from './components/Clock.jsx';
import FunctionalInput from './components/FunctionalInput.jsx';
import ClassInput from './components/ClassInput.jsx';
import EnhancedClassInput from './components/TodoList/EnhancedClassInput.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    {/* <TodoList /> */}
    {/* <CustomInput /> */}
    <Person />
    <Clock />
    {/* <FunctionalInput /> */}
    {/* <ClassInput /> */}
    <EnhancedClassInput />
  </StrictMode>
);
