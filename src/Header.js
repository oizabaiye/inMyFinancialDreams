import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="headerWrapper">
          <h1>in my financial dreams</h1>
          {/* <h2>What would your dream life cost?</h2> */}
          <p class="description">What would your ideal life look like? Use this expense calculator to find out. Then get to work making that $$$!</p>
        </div>
      </header>
    )
  }
} 

export default Header;