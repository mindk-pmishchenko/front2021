import {useState} from 'react';
import UserProfileContainer from "./containers/userProfile";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import useCustomHook from './customHook';

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

  const navigate = useNavigate();

  const goTo404 = () => {
    navigate('/404');
  }

  return (
  <div className="App">
    <header className="App-header">
      <UserProfileContainer firstName="first" lastName="last" add={add} string={string} birthdayYear={1923}
      user={{
        name: 'test',
        age: '23',
        avatar: {
          file: {
            id: 1,
            name: '123.jpg',
            path: '/files/1.jpg'
          }
        },
        files: [
          {
            id: 1,
            name: '123.jpg',
            path: '/files/1.jpg'
          },
          {
            id: 1,
            name: '123.jpg',
            path: '/files/1.jpg'
          }],
        addrr: {
          main: {
            line1: 'test',
            line2: 'test',
            city: 'test',
            zip: 1234
          },
          alt: {
            line1: 'test',
            line2: 'test',
            city: 'test',
            zip: 1234
          }
        },
        friends: [
          {
            name: 'test',
            age: '23',
            avatar: {
              file: {
                id: 1,
                name: '123.jpg',
                path: '/files/1.jpg'
              }
            },
            files: [
              {
                id: 1,
                name: '123.jpg',
                path: '/files/1.jpg'
              },
              {
                id: 1,
                name: '123.jpg',
                path: '/files/1.jpg'
              }],
            addrr: {
              main: {
                line1: 'test',
                line2: 'test',
                city: 'test',
                zip: 1234
              },
              alt: {
                line1: 'test',
                line2: 'test',
                city: 'test',
                zip: 1234
              }
            }
          }
        ]
      }}>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={inc}>Click me UP!</button>
        <button onClick={goTo404}>Go to 404</button>
        <div>count: {counter}</div>
        <div>Article #{id} with alias {alias}</div>
      </UserProfileContainer>
    </header>
  </div>
  );
}

export default App;
