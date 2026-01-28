import React from 'react';
import logo from './logo.svg';
import papagaio from "./papagaio.jpg"
import './App.css';

function App() {
  const pi = 3.1415

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
        <img src={papagaio} alt="Papagaio" />
        </p>
        <p>
          Olá, {pi}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className='App-link'
          href="https://www.google.com"
          target="_blank"
        >
          Google
        </a>
      </header>
    </div>
  );
}

export default App;
