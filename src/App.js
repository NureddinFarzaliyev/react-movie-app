import './App.css';
import Pages from './pages/pages';
import { Routes, Route } from 'react-router-dom';
import Movie from './pages/movie'
import Nav from './components/nav';
import Search from './pages/search';

const key = "23700a5b8cec4946243797a562c1bf8f";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path={"/movie/:id"} element={<Movie />} />
        <Route path={"/search/:query"} element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
