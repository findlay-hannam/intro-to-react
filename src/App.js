import React from 'react';
import logo from './logo.svg';
import './App.css';

const listNumbers = new Array(30);
let i;
for (i=0; i<listNumbers.length; i++) {
  listNumbers[i] = i;
}
const listTexts = listNumbers.map(number => `List item ${number}`);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
