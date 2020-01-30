import React from 'react';
import logo from './logo.svg';
import './App.css';

function Intro(props) {
  return (
    <p className="App-intro">
      Our first functional component
    </p>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV Series List</h1>
      </header>
      <Intro />
    </div>
  );
}

export default App;
