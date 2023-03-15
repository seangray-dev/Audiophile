import { React, useState, useEffect } from 'react';
import ButtonShop from '/src/components/shared/buttons/Button-Shop.jsx';

function ProductCategory() {
  const [showProductCategory, setShowProductCategory] = useState(false);

  useEffect(() => {
    setShowProductCategory(true);
  }, []);

  return (
    <div
      className={`bg-pureWhite product-category ${
        showProductCategory ? 'active' : ''
      }`}>
      <ul className='pt-[84px] md:pt-[110px] flex flex-col md:flex-row md:justify-between gap-[100px] md:gap-[10px] md:max-w-[689px] mx-auto items-center lg:hidden'>
        <li className=''>
          <div className='relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto'>
            <img
              className='w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              src='/assets/shared/desktop/image-category-thumbnail-headphones.png'
              alt=''
            />
            <a className='text-mobileMenu' href='/'>
              HEADPHONES
            </a>
            <ButtonShop></ButtonShop>
          </div>
        </li>
        <li className=''>
          <div className='relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto'>
            <img
              className='w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              src='/assets/shared/desktop/image-category-thumbnail-speakers.png'
              alt=''
            />
            <a className='text-mobileMenu' href='/'>
              SPEAKERS
            </a>
            <ButtonShop></ButtonShop>
          </div>
        </li>
        <li className=''>
          <div className='relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto'>
            <img
              className='w-1/2 h-auto absolute top-[25px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              src='/assets/shared/desktop/image-category-thumbnail-earphones.png'
              alt=''
            />
            <a className='text-mobileMenu' href='/'>
              EARPHONES
            </a>
            <ButtonShop></ButtonShop>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductCategory;
