import {useState} from 'react';
import {UserProfileContainer} from "./containers/userProfile";

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

  return (
  <div className="App">
    <header className="App-header">
      <UserProfileContainer firstName="first" lastName="last" middleName="middle" birthdayYear={1990} add={add} string={string}>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={inc}>Click me UP!</button>
        <div>count: {counter}</div>
      </UserProfileContainer>
    </header>
  </div>
  );
}

export default App;
