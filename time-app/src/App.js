import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js';
import DiceRoller from './DiceRoller.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Timelement is dope</h1>
        </header>
        <Timer/>
        <DiceRoller/>
      </div>
    );
  }
}

export default App;
