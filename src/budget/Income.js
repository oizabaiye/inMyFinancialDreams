import React, { Component } from 'react';

class Income extends Component {

  render() {
    return (
      <div className="income">
        <label className="currentIncome"> Current Income: 
          <input type="number" name="currentIncome" id="currenIncome" value={this.props.currentIncome} onChange={this.props.handleChange} />
        </label>
      </div>
    )
  }
}

export default Income;