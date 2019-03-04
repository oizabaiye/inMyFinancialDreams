import React from 'react';
import Income from './Income';
import Result from './Result';


class Budget extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      housingUtilities: "",
      phoneInternet: "",
      transportation: "",
      groceries: "",
      eatOut: "",
      healthCosts: "",
      fitnessWellness: "",
      giftsCharity: "",
      family: "",
      vacation: "",
      beautyGrooming: "",
      homeSupplies: "",
      clothing: "",
      entertainment: "",
      learning: "",
      electronics: "",
      emergencyFund: "",
      miscellaneous: "",
      savingsInvestment: "",
      totalExpense: '',
      currentIncome: ''
    }
  }
//on form submit, collect all input values and add them. subtract current income from the sum 
  handleSubmit = (event) => {
    event.preventDefault();
    const stateClone = {...this.state};
    let totalValues = Object.values(stateClone).reduce((acc, value) => {
      return value !== undefined ? acc + Number(value) : null;
    }, 0) 
    totalValues = totalValues - this.state.currentIncome;
    this.setState({
      totalExpense: totalValues
    })
  } 

  //stateclone copies this.state into a new object

//as user inputs, change the value to a string
  handleChange = (event) =>{
    this.setState({
      [event.target.name]: parseInt(event.target.value, 10) 
    })
  }

  render() {
    return (
      <div className="formWrapper">
        <React.Fragment>

          <h3>My expense wishlist</h3>

          <form onSubmit={this.handleSubmit} className="budget">
            <Income handleChange={this.handleChange} currentIncome={this.state.currentIncome} />

            <div className="formRow">
              <label> Housing & Utilities:
                <input type="number" name="housingUtilities" value={this.state.housingUtilities} onChange={this.handleChange}/>
              </label>
            </div>
            <div className="formRow">
              <label htmlFor="phoneInternet">Phone & Internet: 
                <input type="number" name="phoneInternet" value={this.state.phoneInternet} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Transportation: 
                <input type="number" name="transportation" value={this.state.transportation} onChange={this.handleChange} />
              </label>
            </div>  
            <div className="formRow">
              <label> Groceries: 
                <input type="number" name="groceries" value={this.state.groceries} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow"> 
              <label> Eating Out:
                <input type="number" name="eatOut" value={this.state.eatOut} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow"> 
              <label> Healthcare: 
                <input type="number" name="healthCosts" value={this.state.healthCosts} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Fitness & Wellness: 
                <input type="number" name="fitnessWellness" value={this.state.fitnessWellness} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Gifts/ Charity:
                <input type="number" name="giftsCharity" value={this.state.giftsCharity} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Family:
                <input type="number" name="family" value={this.state.family} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Travel/ Vacation:
                <input type="number" name="vacation" value={this.state.vacation} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Beauty & Grooming: 
                <input type="number" name="beautyGrooming" value={this.state.beautyGrooming} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Home Supplies: 
              <input type="number" name="homeSupplies" value={this.state.homeSupplies} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Clothing: 
                <input type="number" name="clothing" value={this.state.clothing} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Entertainment: 
                <input type="number" name="entertainment" value={this.state.entertainment} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Learning & Training: 
                <input type="number" name="learning" value={this.state.learning} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Electronics: 
                <input type="number" name="electronics" value={this.state.electronics} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Emergency Fund:
                <input type="number" name="emergencyFund" value={this.state.emergencyFund} onChange={this.handleChange} />
              </label>
            </div>
            <div className="formRow">
              <label> Savings & Investments: 
                <input type="number" name="savingsInvestment" value={this.state.savingsInvestment} onChange={this.handleChange} />
              </label>
            </div>
            <div className="submit">
              <input type="submit" value="Submit" id="submitButton" />
            </div>
          </form>
          <Result totalExpense={this.state.totalExpense} currentIncome={this.state.currentIncome}/>
        </React.Fragment>
        
      </div>
    )
  }
}

export default Budget;
