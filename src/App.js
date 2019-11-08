import React from 'react';
import './App.css';
import { FOUR, FOUR_HUNDRED, HUNDRED, VALID_LEAP_YEAR_TEXT, INVALID_LEAP_YEAR_TEXT } from './constants';

class App extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      inputYear: "",
      message: ""
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick  = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({inputYear: event.target.value});
    this.setState({message: ""});
  }

  handleClick() {
    if (this.state.inputYear) {
      const leapYearStatusMessage = IsValidLeapYear(this.state.inputYear);
      const xx = leapYearStatusMessage ? VALID_LEAP_YEAR_TEXT : INVALID_LEAP_YEAR_TEXT
      this.setState({message: xx});
    } else {
      alert("Please enter valid positive number")
    }
    
  };

  render() {
    return (
    <div className="App">
      Please enter year: <input type="text" value={this.state.inputYear} onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Calculate Leap Year</button>
      <div>{this.state.inputYear} {this.state.message}</div>
    </div>
  )};
}

export function IsYearDivisibleBy4(year) {
  return (year % FOUR === 0) ? true : false;
}

export function IsYearDivisibleBy400(year) {
  return (year % FOUR_HUNDRED === 0) ? true : false;
}

export function IsYearDivisibleBy100(year) {
  return (year % HUNDRED === 0) ? true : false;
}

export function IsValidLeapYear(year) {
   if (IsYearDivisibleBy100(year)) {
     return IsYearDivisibleBy400(year);
   } else {
    return IsYearDivisibleBy4(year);
   }
}

export default App;
