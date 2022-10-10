import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElementClass from './components/elementClass';
import Element from './components/element';
import Proper from './components/Proper';
import PropsExercise from './components/ProperExercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Proper number={2} boolean={true} /> */}
      <PropsExercise Header={"Andrew McCall"} p1="Paragraph One" p2="Paragraph Two"/>
    </div>
  );
}

export default App;
