import {useState} from 'react';
import {UserProfileContainer} from "./containers/userProfile";
import { useParams } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  const [string, setString] = useState('a');

  const inc = () => {
    setCounter(counter + 1);
  }

  const add = () => {
    setString(string + string);
    setCounter(counter + 1);
  }

  const { id, alias } = useParams();

  return (
  <div className="App">
    <header className="App-header">
      <UserProfileContainer firstName="first" lastName="last" middleName="middle" birthdayYear={1990} add={add} string={string}>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={inc}>Click me UP!</button>
        <div>count: {counter}</div>
        <div>Article #{id} with alias {alias}</div>
      </UserProfileContainer>
    </header>
  </div>
  );
}

export default App;
