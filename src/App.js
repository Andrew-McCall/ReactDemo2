import React from 'react';
import logo from './pug.png';
import './App.css';
import ElementClass from './components/elementClass';
import Element from './components/element';
import Proper from './components/Proper';
import PropsExercise from './components/ProperExercise';
import Clicker from './components/ClickerLifted/Clicker.jsx';
import Search from './components/Search';
import Basket from './components/Basket/Basket';
import Lifecycle from './components/LifeCycle';
import Effect from './components/effect/effect';
import EffectParent from './components/effect/effectParent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <EffectParent/>

    </div>
  );
}

export default App;
