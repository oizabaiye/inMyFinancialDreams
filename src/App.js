import React from 'react';
import './App.css';
import Header from './Header';
import Budget from './budget/Budget';
import Footer from './Footer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Budget />
        <Footer />
      </div>
    );
  }
}

export default App;
