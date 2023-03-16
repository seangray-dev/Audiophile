import React from 'react';
import Nav from '../shared/Nav';
import About from '../shared/About';
import Footer from '../shared/Footer';
import AddToCart from '../shared/buttons/AddToCart';

const ProductDetails = () => {
  return (
    <div>
      <Nav></Nav>
      <div>
        <div className='container mx-auto mt-4 md:mt-8 mb-6 lg:mt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50'>
          <a className='text-body hover:underline' href=''>
            Go Back
          </a>
        </div>
        <div className='container mx-auto flex flex-col gap-8 md:max-w-[689px] lg:grid lg:grid-cols-2 lg:max-w-[1110px] lg:gap-32 lg:items-center'>
          <div>
            <img
              className='mx-auto rounded-lg md:hidden'
              src='public/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
              alt=''
            />
            <img
              className='mx-auto w-full max-h-[352px] object-cover rounded-lg hidden md:block lg:hidden'
              src='public/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
              alt=''
            />
            <img
              className='mx-auto rounded-lg hidden lg:block'
              src='public/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
              alt=''
            />
          </div>
          <div className='mx-auto text-center lg:text-left flex flex-col gap-6'>
            <h6 className='text-newProduct uppercase text-brightOrange'>
              New Product
            </h6>

            <h3 className='text-h4 md:text-h2 uppercase md:w-1/2 md:mx-auto lg:mx-0 lg:w-full'>
              XX99 Mark II Headphones
            </h3>
            <p className='text-body opacity-50 md:max-w-[572px]'>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <h6 className='text-h6'>$ 2,999</h6>
            <div>
              <AddToCart></AddToCart>
            </div>
          </div>
        </div>
      </div>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
