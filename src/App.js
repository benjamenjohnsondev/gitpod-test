import React from 'react';
import logo from './media/Logo-transparent.svg';
import reactLogo from './media/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Full website coming soon
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with React <img src={reactLogo} alt="react-logo"/>
        </a>
      </header>
    </div>
  );
}

export default App;
