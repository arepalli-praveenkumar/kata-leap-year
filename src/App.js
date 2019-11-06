import React from 'react';
import './App.css';
import { FOUR, FOUR_HUNDRED, HUNDRED } from './constants';

function App() {
  return (
    <div className="App">
    </div>
  );
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
