import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import PuppyList from './Components/PuppyList';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <header className="App__header">
          <Link to="/"><h1>Puppy Database</h1></Link>
        </header>
        <main className="App__main">
          <Routes>x
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/PuppyList" element={<PuppyList/>}/>
            <Route path="*" element={<LandingPage/>}/>
          </Routes>
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
