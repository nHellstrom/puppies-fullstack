import React from 'react';
import PuppyList from './Components/PuppyList';
import ControlPanel from './Components/ControlPanel';
import { IPuppy } from './usertypes';
import './App.css';

function App() {
  // const [puppyList, setPuppyList]= React.useState<IPuppy[] | undefined>(undefined);
  // const state = {puppyList, setPuppyList};

  return (
    <div className="App">
      <header className="App__header">
        <h1>Puppy Database</h1>
      </header>
      <main className="App__main">
        <PuppyList />
        {/* <ControlPanel/> */}
      </main>
    </div>
  );
}

export default App;
