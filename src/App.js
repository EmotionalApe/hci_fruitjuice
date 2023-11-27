
import './App.css';
import About from './components/About';
import AboutUs from './pages/AboutUs';
import Order from './components/Order'
import ContactUs from './components/ContactUs';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/product' Component={Order} />
          <Route path='/contact' Component={ContactUs} />
          <Route path='/cart' Component={Cart} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
