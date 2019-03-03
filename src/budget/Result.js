import React, { Component } from 'react';

class Result extends Component {
  render(){
    return (
      <React.Fragment>
        <div className="balance">
          <p>You're almost out</p>
        </div>
        <div className="advice">
          <p>You should save more!</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Result;