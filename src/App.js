import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export function ValidateLeapYear(year) {
  return (year % 4 === 0) ? true : false;
}

export default App;
