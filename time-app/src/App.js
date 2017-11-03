import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js';
import diceRoller from './diceRoller.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Timelement is dope</h1>
        </header>
        <Timer/>
        <diceRoller/>
      </div>
    );
  }
}

export default App;
