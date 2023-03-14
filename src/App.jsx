import { useState } from 'react';
import Nav from './components/shared/Nav';
import Hero from './components/home/Hero';
import ProductCategory from './components/shared/ProductCategory';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Hero></Hero>
    </div>
  );
}

export default App;
