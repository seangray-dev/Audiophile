import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/shared/Nav';
import Hero from './components/home/Hero';
import ProductCategoryHome from './components/shared/ProductCateogry.jsx';
import ProductShowcase from './components/home/ProductShowcase';
import About from './components/shared/About';
import Footer from './components/shared/Footer';

// pages
import Headphones from './components/pages/headphones/Headphones';

function App() {
  return (
    <div className='App'>
      <Headphones></Headphones>
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
