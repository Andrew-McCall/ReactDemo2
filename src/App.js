import React from 'react';
import logo from './pug.png';
import './App.css';

import {

  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link

} from "react-router-dom";

import { useState } from 'react';
import theme from './components/Contexts/context';

import Params from './components/Parmas';
import History from './components/istory';
import Reducer from './components/reducer';

function App() {

  const [themeState, setThemeState] = useState("light")

  return (
    <div>
      <theme.Provider value={{themeState, setThemeState}}> 

        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="help">Help</Link>
            <Link to="home">Home</Link>
            <Link to="Test">Test</Link>
            <Link to="he523325lp">Rubbish</Link>
          </header>

          <Switch>  {/* Many Route */}
            <Route path="/home" element={<Reducer/>}/>
            <Route path="/help" element={<History/>}/>
            <Route path="/test/:id" element={<Params/>}/>
            <Route path="*" element={<div>
              <h1>404 Page Not Found</h1>
              <p>Gerrra off!</p>
            </div>}/>
          </Switch>

        </Router>

      </theme.Provider>
    </div>
  );
}

export default App;
