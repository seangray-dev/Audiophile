import React from 'react';
import Nav from '../shared/Nav';
import ProductTitleHeader from '../shared/ProductTitleHeader';
import ProductPreviewCard from '../shared/ProductPreviewCard';
import Footer from '../shared/Footer';
import productData from '../../data/products.json';
import ProductCategoryHome from '../shared/ProductCateogry';
import About from '../shared/About';

function Headphones() {
  const headphones = productData.filter(
    (product) => product.category === 'headphones'
  );

  return (
    <div>
      <Nav />
      <ProductTitleHeader title='Headphones' />
      <div className='flex flex-col gap-[120px]'>
        {headphones
          .sort((a, b) => b.new - a.new || a.id - b.id)
          .map((headphone) => (
            <ProductPreviewCard
              key={headphone.id}
              image={headphone.image}
              name={headphone.name}
              description={headphone.description}
              newProduct={headphone.new}
            />
          ))}
      </div>
      <ProductCategoryHome />
      <About />
      <Footer />
    </div>
  );
}

export default Headphones;
