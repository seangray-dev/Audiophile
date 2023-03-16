import React from 'react';
import Nav from '../shared/Nav';
import ProductTitleHeader from '../shared/ProductTitleHeader';
import ProductPreviewCard from '../shared/ProductPreviewCard';
import Footer from '../shared/Footer';
import productData from '../../data/products.json';
import ProductCategoryHome from '../shared/ProductCateogry';
import About from '../shared/About';

function Earphones() {
  const earphones = productData.filter(
    (product) => product.category === 'earphones'
  );

  return (
    <div>
      <Nav />
      <ProductTitleHeader title='Earphones' />
      <div className='flex flex-col gap-[120px]'>
        {earphones
          .sort((a, b) => b.new - a.new || a.id - b.id)
          .map((earphone) => (
            <ProductPreviewCard
              key={earphone.id}
              image={earphone.image}
              name={earphone.name}
              description={earphone.description}
              newProduct={earphone.new}
            />
          ))}
      </div>
      <ProductCategoryHome />
      <About />
      <Footer />
    </div>
  );
}

export default Earphones;
