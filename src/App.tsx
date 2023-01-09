import React from 'react';
import PuppyList from './Components/PuppyList';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App__main">
        <PuppyList/>
        <section>Right side</section>
      </main>
    </div>
  );
}

export default App;
