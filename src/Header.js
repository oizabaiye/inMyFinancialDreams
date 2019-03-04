import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <React.Fragment>
        <h1>in my financial dreams</h1>
        <h2>how much money do you need?</h2>
      </React.Fragment>
    )
  }
} 

// the react fragment block is jsx. the js version would be React.createElement('h1', null, 'text to enter')

export default Header;