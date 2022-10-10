import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElementClass from './components/elementClass';
import Element from './components/element';
import Proper from './components/Proper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta> stylsheetbootstrap .css.min</meta>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Proper number={2} boolean={true} />
    </div>
  );
}

export default App;
