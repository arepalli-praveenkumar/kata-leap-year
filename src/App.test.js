import React from 'react';
import ReactDOM from 'react-dom';
import App, { ValidateLeapYear } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Year divisible by 4", () => {
  const isLeapYear = ValidateLeapYear("1700");
  console.log(isLeapYear)
  expect(isLeapYear).toBe(true);
})