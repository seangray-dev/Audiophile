import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/shared/Nav';
import Hero from './components/pages/home/Hero';
import ProductCategoryHome from './components/shared/ProductCateogry.jsx';
import ProductShowcase from './components/pages/home/ProductShowcase';
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
      <ProductDetails></ProductDetails>
      {/* <Nav></Nav> */}
      {/* <Hero></Hero> */}
      {/* <ProductCategoryHome></ProductCategoryHome> */}
      {/* <ProductShowcase></ProductShowcase> */}
      {/* <About></About>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
