import {useState} from 'react';
import UserProfileContainer from "./containers/userProfile";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import useCustomHook from './customHook';
import authContext from './authContext';

function App() {

  const [counter, setCounter] = useState(0);
  const [string, setString] = useState('a');
  const [userData, setUserData] = useState({authenticated: false, user: null, setUserData: () => {}});

  const inc = () => {
    setCounter(counter + 1);
    setUserData({authenticated: true, user: {id: 1}, setUserData})
  }

  const add = () => {
    setString(string + string);
    setCounter(counter + 1);
  }

  const { id, alias } = useParams();

  const navigate = useNavigate();

  const goTo404 = () => {
    navigate('/404');
  }

  return (
  <div className="App">
    <authContext.Provider value={userData}>
      <header className="App-header">
        <UserProfileContainer firstName="first" lastName="last" add={add} string={string} birthdayYear={1923}
        user={{}}>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={inc}>Click me UP!</button>
          <button onClick={goTo404}>Go to 404</button>
          <div>count: {counter}</div>
          <div>Article #{id} with alias {alias}</div>
        </UserProfileContainer>
      </header>
    </authContext.Provider>
  </div>
  );
}

export default App;
