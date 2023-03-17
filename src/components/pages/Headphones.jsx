import React from 'react';
import ProductTitleHeader from '../shared/ProductTitleHeader';
import ProductPreviewCard from '../shared/ProductPreviewCard';
import productData from '../../data/products.json';
import ProductCategory from '../shared/ProductCateogry';

function Headphones() {
  const headphones = productData.filter(
    (product) => product.category === 'headphones'
  );

  return (
    <div>
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
              id={headphone.id}
              slug={headphone.slug}
            />
          ))}
      </div>
      <ProductCategory />
    </div>
  );
}

export default Headphones;
