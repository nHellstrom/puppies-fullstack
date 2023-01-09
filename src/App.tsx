import React from 'react';
import PuppyList from './Components/PuppyList';
import ControlPanel from './Components/ControlPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Puppy Database</h1>
      </header>
      <main className="App__main">
        <PuppyList/>
        <ControlPanel/>
      </main>
    </div>
  );
}

export default App;
