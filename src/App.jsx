import { useState } from 'react';
import Nav from './components/shared/Nav';
import Hero from './components/home/Hero';
import ProductCategoryHome from './components/home/ProductCateogryHome.jsx';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Hero></Hero>
      <ProductCategoryHome></ProductCategoryHome>
    </div>
  );
}

export default App;
