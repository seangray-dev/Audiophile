import React, { useState } from 'react';
import Nav from '../../shared/Nav';
import ProductTitleHeader from '../../shared/ProductTitleHeader';
import Footer from '../../shared/Footer';

function Headphones() {
  return (
    <div>
      <Nav />
      <ProductTitleHeader title='Headphones' />
      <Footer />
    </div>
  );
}

export default Headphones;
