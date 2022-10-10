import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElementClass from './components/elementClass';
import Element from './components/element';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Component></Component> */}
      <Element></Element>
      <ElementClass></ElementClass>
      {React.createElement("div", {className: "createElementFunc"}, React.createElement("h1", null, "My React App"))}
      {/* <div> <h1> My React App </h1> </div> */}
    </div>
  );
}

export default App;
