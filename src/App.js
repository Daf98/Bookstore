import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ReduxBooks from './components/ReduxBooks';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ReduxBooks />
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
