import React, { Component } from 'react';

class Result extends Component {
  render(){
    return (
        <div>
          <label className="balance"> Your balance is:
            <input type="text" name="balance" className="balanceValue" value="" />
          </label>
        </div>
    )
  }
}

// import React from 'react';

// const sumOfValues = () => {
//   return <p>Your lifestyle costs xyz! This leaves you a balance of abc!</p>
// }

// export default Summation;

export default Result;