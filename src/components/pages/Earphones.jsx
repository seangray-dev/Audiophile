import React from 'react';
import ProductTitleHeader from '../shared/ProductTitleHeader';
import ProductPreviewCard from '../shared/ProductPreviewCard';
import productData from '../../data/products.json';
import ProductCategory from '../shared/ProductCateogry';

function Earphones() {
  const earphones = productData.filter(
    (product) => product.category === 'earphones'
  );

  return (
    <div>
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
              id={earphone.id}
              slug={earphone.slug}
            />
          ))}
      </div>
      <ProductCategory />
    </div>
  );
}

export default Earphones;
