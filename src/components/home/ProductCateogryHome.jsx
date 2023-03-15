import { React, useState, useEffect } from 'react';
import ButtonShop from '/src/components/shared/buttons/Button-Shop.jsx';

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
  return (
    <div className='bg-pureWhite mb-[120px]'>
      <ul className='pt-[92px] md:pt-[110px] flex flex-col md:grid md:grid-cols-3 gap-[68px] md:gap-[10px] lg:gap-[30px] md:max-w-[689px] lg:max-w-[1110px] mx-auto items-center'>
        <ProductCategory
          imgUrl='/assets/shared/desktop/image-category-thumbnail-headphones.png'
          alt='Headphones'
          category='HEADPHONES'
          href='/'
        />
        <ProductCategory
          imgUrl='/assets/shared/desktop/image-category-thumbnail-speakers.png'
          alt='Speakers'
          category='SPEAKERS'
          href='/'
        />
        <ProductCategory
          imgUrl='/assets/shared/desktop/image-category-thumbnail-earphones.png'
          alt='Earphones'
          category='EARPHONES'
          href='/'
        />
      </ul>
    </div>
  );
}

export default ProductCategoryHome;
