import React from 'react';
import './App.css';
import { FOUR, FOUR_HUNDRED } from './constants';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export function ValidateLeapYear(year) {
  return (year % FOUR === 0) ? true : false;
}

export function IsYearDivisibleBy400(year) {
  return (year % FOUR_HUNDRED === 0) ? true : false;
}

export default App;
