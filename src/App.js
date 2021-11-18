import React from 'react';
// import Header from './components/Header'
import Home from './components/Home';
import Header from './components/Header';
import './App.css';
import TeslaReport from './components/TeslaReport';

function App() {
  return (
    <div className="App">
      <TeslaReport/>
      <Header />
      <Home />
    </div>
  );
}

export default App;
