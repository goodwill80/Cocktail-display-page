import { Route, Routes } from 'react-router-dom';
// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Pages/Error';
import Contact from './Pages/Contact';
import SingleCocktail from './Pages/SingleCocktail';
//Navbar Component
import Navbar from './Components/Navbar.component';
// Style Sheet
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;
