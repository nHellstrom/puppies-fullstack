import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import SearchResults from './Pages/SearchResults/SearchResults';
import AddPuppyForm from './Components/AddPuppyForm/AddPuppyForm';

function App() {

  // const params = useParams();

  return (
    <div className="App">
        <BrowserRouter>
        <header className="App__header">
          <Link to="/" className='App__headerlogo'><h1 >🐕DogDogGo</h1></Link>
          <Link to="/AddNewPuppy" className='App__addPuppyButton'>Add new dog to database</Link>
        </header>
        <main className="App__main">
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/search/:searchquery?" element={<SearchResults/>}/>
            <Route path="/AddNewPuppy" element={ <AddPuppyForm/>}/>
            <Route path="*" element={<LandingPage/>}/>
          </Routes>
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
