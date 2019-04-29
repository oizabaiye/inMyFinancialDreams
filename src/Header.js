import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="headerWrapper">
          <h1>in my financial dreams</h1>
          <h2>
            What would it cost to live your ideal life? 
          </h2>
          <h2>
            Find out with this <span className="monthly">monthly</span> budget calculator
          </h2>
        </div>
      </header>
    );
  }
} 

export default Header;