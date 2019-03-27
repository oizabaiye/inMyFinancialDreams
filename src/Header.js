import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="headerWrapper">
          <h1>in my financial dreams</h1>
          <p className="description">
            What would it cost to live your ideal life? 
            <p>Use this expense
            calculator to find out.</p>
          </p>
        </div>
      </header>
    );
  }
} 

export default Header;