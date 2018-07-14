import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserContainer from './components/user/UsersContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserContainer></UserContainer>
      </div>
    );
  }
}

export default App;
