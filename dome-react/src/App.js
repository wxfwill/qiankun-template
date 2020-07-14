import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Test from './pages/test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello react...
        </p>
        <p>react 子应用部分</p>
        <Test></Test>
      </header>
    </div>
  );
}

export default App;
