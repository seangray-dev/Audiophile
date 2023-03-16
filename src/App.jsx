import { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Nav from './components/shared/Nav';
import Home from './components/pages/home/Home';
import About from './components/shared/About';
import Footer from './components/shared/Footer';

// pages
import Headphones from './components/pages/Headphones';
import Speakers from './components/pages/Speakers';
import Earphones from './components/pages/Earphones';
import ProductDetails from './components/pages/ProductDetails';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
