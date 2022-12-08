import './App.css';
import Home from './Home';
import Movies from './movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Singlemovie from './singlemovie';
import Errorpage from './errorpage';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="movie/:id" element={<Singlemovie />}/>
      <Route path="*" element={<Errorpage />}/>
    </Routes>
    </div>
  );
}

export default App;
