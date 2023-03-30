import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/shared/Nav';
import Home from './components/pages/home/Home';
import About from './components/shared/About';
import Footer from './components/shared/Footer';

// pages
import Headphones from './components/pages/Headphones';
import Speakers from './components/pages/Speakers';
import Earphones from './components/pages/Earphones';
import ProductDetails from './components/pages/ProductDetails';
import Checkout from './components/pages/Checkout';

function App() {
  const location = useLocation();
  const hideAbout = location.pathname === '/checkout';

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/products/:slug' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      {!hideAbout && <About />}
      <Footer />
    </div>
  );
}

export default App;
