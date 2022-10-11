import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElementClass from './components/elementClass';
import Element from './components/element';
import Proper from './components/Proper';
import PropsExercise from './components/ProperExercise';
import Clicker from './components/stateExample';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
     
      {/* <Clicker/> */}
      <Search/>
      
    </div>
  );
}

export default App;
