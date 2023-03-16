import React from 'react';
import ButtonOrange from './buttons/Button-Orange';

const ProductPreviewCard = ({ image, name, description, newProduct }) => {
  return (
    <div className='container mx-auto flex flex-col gap-8 md:max-w-[689px] lg:grid lg:grid-cols-2 lg:max-w-[1110px] lg:gap-32 lg:items-center'>
      <div>
        <img
          className='mx-auto rounded-lg md:hidden'
          src={image.mobile}
          alt={name}
        />
        <img
          className='mx-auto w-full max-h-[352px] object-cover rounded-lg hidden md:block lg:hidden'
          src={image.tablet}
          alt={name}
        />
        <img
          className='mx-auto rounded-lg hidden lg:block'
          src={image.desktop}
          alt={name}
        />
      </div>
      <div className='mx-auto text-center lg:text-left flex flex-col gap-6'>
        {newProduct && (
          <h6 className='text-newProduct uppercase text-brightOrange'>
            New Product
          </h6>
        )}
        <h3 className='text-h4 md:text-h2 uppercase md:w-1/2 md:mx-auto lg:mx-0 lg:w-full'>
          {name}
        </h3>
        <p className='text-body opacity-50 md:max-w-[572px]'>{description}</p>
        <div>
          <ButtonOrange>See Product</ButtonOrange>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
