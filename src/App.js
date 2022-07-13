import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ReduxBooks from './ReduxBooks';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ReduxBooks />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
