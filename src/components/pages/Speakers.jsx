import React from 'react';
import Nav from '../shared/Nav';
import ProductTitleHeader from '../shared/ProductTitleHeader';
import ProductPreviewCard from '../shared/ProductPreviewCard';
import Footer from '../shared/Footer';
import productData from '../../data/products.json';
import ProductCategoryHome from '../shared/ProductCateogry';
import About from '../shared/About';

function Speakers() {
  const speakers = productData.filter(
    (product) => product.category === 'speakers'
  );

  return (
    <div>
      <Nav />
      <ProductTitleHeader title='Speakers' />
      <div className='flex flex-col gap-[120px]'>
        {speakers
          .sort((a, b) => b.new - a.new || a.id - b.id)
          .map((speaker) => (
            <ProductPreviewCard
              key={speaker.id}
              image={speaker.image}
              name={speaker.name}
              description={speaker.description}
              newProduct={speaker.new}
            />
          ))}
      </div>
      <ProductCategoryHome />
      <About />
      <Footer />
    </div>
  );
}

export default Speakers;
