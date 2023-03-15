import { useState } from 'react';
import Nav from './components/shared/Nav';
import Hero from './components/home/Hero';
import ProductCategoryHome from './components/home/ProductCateogryHome.jsx';
import ProductShowcase from './components/home/ProductShowcase';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Hero></Hero>
      <ProductCategoryHome></ProductCategoryHome>
      <ProductShowcase></ProductShowcase>
    </div>
  );
}

export default App;
