import {UserProfileContainer} from "./containers/userProfile";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <UserProfileContainer firstName="first" lastName="last" middleName="middle" birthdayYear={1990} />
    </header>
  </div>
  );
}

export default App;
