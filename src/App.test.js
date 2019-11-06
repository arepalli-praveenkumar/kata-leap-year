import React from 'react';
import ReactDOM from 'react-dom';
import App, { ValidateLeapYear, IsYearDivisibleBy400 } from './App';
import { FOUR, FOUR_HUNDRED, SEVENTEEN_HUNDRED } from './constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Year divisible by 4", () => {
  const isLeapYear = ValidateLeapYear(SEVENTEEN_HUNDRED);
  console.log(isLeapYear)
  expect(isLeapYear).toBe(true);
})

it("Year divisible by 400", () => {
  const isLeapYear = IsYearDivisibleBy400(SEVENTEEN_HUNDRED);
  expect(isLeapYear).toBe(false)
})