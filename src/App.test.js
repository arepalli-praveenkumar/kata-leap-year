import React from 'react';
import ReactDOM from 'react-dom';
import App, { IsYearDivisibleBy4, IsYearDivisibleBy400, 
  IsYearDivisibleBy100, IsValidLeapYear } from './App';
import { SEVENTEEN_HUNDRED, VALID_LEAP_YEAR } from './constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Year divisible by 4", () => {
  const isLeapYear = IsYearDivisibleBy4(SEVENTEEN_HUNDRED);
  console.log(isLeapYear)
  expect(isLeapYear).toBe(true);
})

it("Year divisible by 400", () => {
  const isLeapYear = IsYearDivisibleBy400(SEVENTEEN_HUNDRED);
  expect(isLeapYear).toBe(false)
})

it("Year divisible by 100", () => {
  const isLeapYear = IsYearDivisibleBy100(SEVENTEEN_HUNDRED);
  expect(isLeapYear).toBe(true)
})

it("Year must be leap year", () => {
  const isLeapYear = IsValidLeapYear(VALID_LEAP_YEAR);
  console.log(isLeapYear);
  expect(isLeapYear).toBe(true);
})