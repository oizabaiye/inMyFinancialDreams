import React from 'react';
import './App.css';
import Header from './Header';
import Income from './budget/Income';
import Budget from './budget/Budget';
import Result from './budget/Result';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Income />
        <Budget />
        <Result />
      </div>
    );
  }
}

export default App;
