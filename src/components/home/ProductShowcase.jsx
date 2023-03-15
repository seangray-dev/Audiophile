import { React, useState, useEffect } from 'react';
import ButtonBlack from '/src/components/shared/buttons/Button-Black.jsx';
import ButtonWhite from '/src/components/shared/buttons/Button-White.jsx';

function ProductMain() {
  return (
    <div className='bg-brightOrange bg-patternCircles bg-bottom bg-cover bg-no-repeat flex flex-col items-center rounded-lg text-center pb-[55px]'>
      <img
        className='w-1/2 mt-[55px] mb-8'
        src='public/assets/home/mobile/image-speaker-zx9.png'
        alt=''
      />
      <h3 className='text-h3 text-pureWhite uppercase mb-6'>
        ZX-9<br></br> Speaker
      </h3>
      <p className='text-body text-pureWhite opacity-75 mb-6'>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <ButtonBlack>See product</ButtonBlack>
    </div>
  );
}

function ProductSecondary() {
  return <div></div>;
}

function ProductAdditional() {
  return <div></div>;
}

function ProductCategoryHome() {
  return (
    <section className='container mx-auto'>
      <ProductMain></ProductMain>
      <ProductSecondary></ProductSecondary>
      <ProductAdditional></ProductAdditional>
    </section>
  );
}

export default ProductCategoryHome;
