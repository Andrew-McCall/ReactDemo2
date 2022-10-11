import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElementClass from './components/elementClass';
import Element from './components/element';
import Proper from './components/Proper';
import PropsExercise from './components/ProperExercise';
import Clicker from './components/ClickerLifted/Clicker.jsx';
import Search from './components/Search';
import Basket from './components/Basket/Basket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
     
      {/* <Clicker/> */}
      <Basket/>
      
    </div>
  );
}

export default App;
