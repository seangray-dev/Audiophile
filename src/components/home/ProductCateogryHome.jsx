import { React, useState, useEffect } from 'react';
import ButtonShop from '/src/components/shared/buttons/Button-Shop.jsx';
import products from '/src/data/products.json';

function ProductCategory({ imgUrl, alt, category, href }) {
  return (
    <li>
      <div className='relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto'>
        <img
          className='w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          src={imgUrl}
          alt={alt}
        />
        <a className='text-mobileMenu' href={href}>
          {category}
        </a>
        <ButtonShop></ButtonShop>
      </div>
    </li>
  );
}

function ProductCategoryHome() {
  // Filter the products to get only the desired ones
  const filteredProducts = products
    .filter(
      (product) =>
        product.slug === 'xx99-mark-one-headphones' ||
        product.slug === 'zx9-speaker' ||
        product.slug === 'yx1-earphones'
    )
    // Sort headphones, speakers, eaarphones
    .sort((a, b) => {
      const categoryOrder = { headphones: 0, speakers: 1, earphones: 2 };
      return categoryOrder[a.category] - categoryOrder[b.category];
    });

  return (
    <div className='bg-pureWhite mb-[120px]'>
      <ul className='pt-[92px] md:pt-[110px] flex flex-col md:grid md:grid-cols-3 gap-[68px] md:gap-[10px] lg:gap-[30px] md:max-w-[689px] lg:max-w-[1110px] mx-auto items-center'>
        {filteredProducts.map((product) => (
          <ProductCategory
            key={product.id}
            imgUrl={product.categoryImage.categoryPreview}
            alt={product.name}
            category={product.category.toUpperCase()}
            href={`/products/${product.slug}`}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductCategoryHome;
