import React, { Component } from 'react';

class Income extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIncome: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value, 10)
    })
  }

  render() {
    return (
      <div>
        <label className="currentIncome"> Current Income: 
          <input type="number" name="currentIncome" value={this.state.currentIncome} onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

export default Income;