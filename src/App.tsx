import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import SearchResults from './Pages/SearchResults';
import PuppyList from './Components/PuppyList';

function App() {

  // const params = useParams();

  return (
    <div className="App">
        <BrowserRouter>
        <header className="App__header">
          <Link to="/" className='App__headerlogo'><h1 >🐕DogDogGo</h1></Link>
          <Link to="/PuppyList" className='App__temporarybuttondeletethis'>🔶Temporary link to testing page🔶</Link>
        </header>
        <main className="App__main">
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/PuppyList" element={<PuppyList/>}/>
            {/* <Route path="/search?name=:searchquery" element={<SearchResults/>}/> */}
            <Route path="/search/:searchquery" element={<SearchResults/>}/>
            {/* <Route path="/test" element={<SearchResults/>}/> */}
            <Route path="*" element={<LandingPage/>}/>
          </Routes>
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
