import React, { Component } from 'react';
import './Result.css';

//when total Expense has a value (handleSubmit() is called), return advice string.
class Result extends Component {
  render(){
    return (
      <div className="advice">
        {this.props.totalExpense !== '' ? <p>Hey there. You need $ {this.props.totalExpense} to finance your dream lifestyle. Your current income is ${this.props.currentIncome}. Get to work!</p> : null}
      </div>
          
    )
  }
}

export default Result;