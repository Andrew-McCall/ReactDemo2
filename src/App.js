import React from 'react';
import logo from './pug.png';
import './App.css';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,

  Link
} from "react-router-dom";

import Request from './components/resquest';
import Params from './components/Parmas';
import History from './components/istory';

function App() {
  return (
    <div>
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="help">Help</Link>
          <Link to="home">Home</Link>
          <Link to="Test">Test</Link>
          <Link to="he523325lp">Rubbish</Link>
        </header>

        <Switch>  {/* Many Route */}
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/help" element={<History/>}/>
          <Route path="/test/:id" element={<Params/>}/>
          <Route path="*" element={<h1>235Wild663</h1>}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
