import logo from './logo.svg';
import './App.css';
import Element from './components/element';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Element/>
      </header>
    </div>
  );
}

export default App;
