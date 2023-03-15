import React from 'react';
import ButtonOrange from '/src/components/shared/buttons/Button-Orange.jsx';

function Hero() {
  return (
    <section className='hero bg-heroMobile bg-cover bg-bottom bg-no-repeat md:bg-heroTablet lg:bg-heroDesktop pb-[110px] md:pb-[167px]'>
      <div className='max-w-[328px] md:max-w-[379px] mx-auto container flex flex-col items-center text-center lg:text-left lg:items-start'>
        <p className='text-gray tracking-[10px] uppercase mt-[108px] md:mt-[126px] mb-4'>
          New Product
        </p>
        <h1 className='text-h1-mobile md:text-h1 uppercase text-pureWhite mb-6 md:mb-10'>
          XX99 MARK II Headphones
        </h1>
        <p className='text-body text-lightGray mb-7'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonOrange href='#'>See Product</ButtonOrange>
      </div>
    </section>
  );
}

export default Hero;
