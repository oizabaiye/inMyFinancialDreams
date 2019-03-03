import React from 'react';


class Budget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      housingUtilities: undefined,
      phoneInternet: undefined,
      transportation: undefined,
      groceries: undefined,
      eatOut: undefined,
      healthCosts: undefined,
      fitnessWellness: undefined,
      giftsCharity: undefined,
      family: undefined,
      vacation: undefined,
      beautyGrooming: undefined,
      homeSupplies: undefined,
      clothing: undefined,
      entertainment: undefined,
      learning: undefined,
      electronics: undefined,
      emergencyFund: undefined,
      miscellaneous: undefined,
      savingsInvestment: undefined
    }
  }

  handleSubmit(event){
    event.preventDefault();
    // collect all the values of set state in an array
    // add them up using reduce and const total
    // export this to Result.js, also export Income to Result.js
    //in Result.js, delete the total from income
    //if result <= 0, change background to red and display advice to cut down largest expenses or earn more money
    //if result >= 0, change background to green and display advice saying good job, you're not in the red. You can always save more though
    
  }

  handleChange=(event) =>{
    console.log("changed")
    this.setState({
      [event.target.name]: parseInt(event.target.value, 10)
    })
  }

  render() {
    // const {
    //   var,
    //   var2,
    // } = this.props;
    // then can use var directly. react injects all the props from the parent component
    //JSX is for only when you're faking html dom

    
    return (
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit} id="budget">
          <label> Housing & Utilities:
            <input type="number" name="housingUtilities" value={this.state.housingUtilities} onChange={this.handleChange}/>
          </label>
          <label htmlFor="phoneInternet">Phone & Internet: 
            <input type="number" name="phoneInternet" value={this.state.phoneInternet} onChange={this.handleChange} />
          </label>
          <label> Transportation: 
            <input type="number" name="transportation" value={this.state.transportation} onChange={this.handleChange} />
          </label>
          <label> Groceries: 
            <input type="number" name="groceries" value={this.state.groceries} onChange={this.handleChange} />
          </label>
          <label> Eating Out:
            <input type="number" name="eatOut" value={this.state.eatOut} onChange={this.handleChange} />
          </label>
          <label> Healthcare: 
            <input type="number" name="healthCosts" value={this.state.healthCosts} onChange={this.handleChange} />
          </label>
          <label> Fitness & Wellness: 
            <input type="number" name="fitnessWellness" value={this.state.fitnessWellness} onChange={this.handleChange} />
          </label>
          <label> Gifts/ Charity:
            <input type="number" name="giftsCharity" value={this.state.giftsCharity} onChange={this.handleChange} />
          </label>
          <label> Family:
            <input type="number" name="family" value={this.state.family} onChange={this.handleChange} />
          </label>
          <label> Travel/ Vacation:
            <input type="number" name="vacation" value={this.state.vacation} onChange={this.handleChange} />
          </label>
          <label> Beauty & Grooming: 
            <input type="number" name="beautyGrooming" value={this.state.beautyGrooming} onChange={this.handleChange} />
          </label>
          <label> Home Supplies: 
          <input type="number" name="homeSupplies" value={this.state.homeSupplies} onChange={this.handleChange} />
          </label>
          <label> Clothing: 
            <input type="number" name="clothing" value={this.state.clothing} onChange={this.handleChange} />
          </label>
          <label> Entertainment: 
            <input type="number" name="entertainment" value={this.state.entertainment} onChange={this.handleChange} />
          </label>
          <label> Learning & Training: 
            <input type="number" name="learning" value={this.state.learning} onChange={this.handleChange} />
          </label>
          <label> Electronics: 
            <input type="number" name="electronics" value={this.state.electronics} onChange={this.handleChange} />
          </label>
          <label> Emergency Fund:
            <input type="number" name="emergencyFund" value={this.state.emergencyFund} onChange={this.handleChange} />
          </label>
          <label> Savings & Investments: 
            <input type="number" name="savingsInvestment" value={this.state.savingsInvestment} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" id="submit"/>
        </form>
      </div>
    )
  }
}

// note - can only have expressions in react component. can't use if statement
// assume one user for now. assume they are logged in. what would the app look like for them?

export default Budget;