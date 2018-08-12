import React, { Component } from 'react';
import logo from '../media/logo.svg';
import StockPrice from './StockPrice';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StockPrice />
      </div>
    );
  }
}

export default App;
