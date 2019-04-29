import React, { Component } from 'react';

class Income extends Component {

  render() {
    return (
      <div className="income">
        <label className="currentIncome"> Monthly Income: 
          <input type="number" name="currentIncome" id="currenIncome" value={this.props.currentIncome} onChange={this.props.handleChange} required/>
        </label>
      </div>
    )
  }
}

export default Income;