// import React from 'react';
// import Nav from '../shared/Nav';
// import About from '../shared/About';
// import Footer from '../shared/Footer';
// import AddToCart from '../shared/buttons/AddToCart';
// import products from 'src/data/products.json';

// const ProductDetails = () => {
//   return (
//     <div>
//       <Nav></Nav>
//       <div>
//         <div className='container mx-auto mt-4 md:mt-8 mb-6 lg:mt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50'>
//           <a className='text-body hover:underline' href=''>
//             Go Back
//           </a>
//         </div>
//         <div className='container mx-auto flex flex-col gap-8 md:max-w-[689px] md:grid md:grid-cols-2 lg:max-w-[1110px] md:gap-[69px] lg:gap-32 md:items-center md:mb-[120px]'>
//           <div>
//             <img
//               className='mx-auto rounded-lg md:hidden'
//               src='public/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
//               alt=''
//             />
//             <img
//               className='mx-auto w-full h-auto object-cover rounded-lg hidden md:block lg:hidden'
//               src='public/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
//               alt=''
//             />
//             <img
//               className='mx-auto rounded-lg hidden lg:block'
//               src='public/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
//               alt=''
//             />
//           </div>
//           <div className='mx-auto flex flex-col gap-6 mb-[88px] md:mb-0'>
//             <h6 className='text-newProduct uppercase text-brightOrange'>
//               New Product
//             </h6>

//             <h3 className='text-h4 md:text-h2 uppercase  lg:mx-0 lg:w-full'>
//               XX99 Mark II Headphones
//             </h3>
//             <p className='text-body opacity-50 md:max-w-[572px]'>
//               The new XX99 Mark II headphones is the pinnacle of pristine audio.
//               It redefines your premium headphone experience by reproducing the
//               balanced depth and precision of studio-quality sound.
//             </p>
//             <h6 className='text-h6'>$ 2,999</h6>
//             <AddToCart></AddToCart>
//           </div>
//         </div>
//         <div className='container mx-auto lg:flex lg:gap-[125px] lg:max-w-[1110px]'>
//           <div className='container mx-auto mb-[88px] md:max-w-[689px] lg:max-w-[1110px]'>
//             <h2 className='uppercase text-h5 md:text-h3 mb-6'>Features</h2>
//             <p className='text-body opacity-50'>
//               Featuring a genuine leather head strap and premium earcups, these
//               headphones deliver superior comfort for those who like to enjoy
//               endless listening. It includes intuitive controls designed for any
//               situation. Whether you’re taking a business call or just in your
//               own personal space, the auto on/off and pause features ensure that
//               you’ll never miss a beat. The advanced Active Noise Cancellation
//               with built-in equalizer allow you to experience your audio world
//               on your terms. It lets you enjoy your audio in peace, but quickly
//               interact with your surroundings when you need to. Combined with
//               Bluetooth 5. 0 compliant connectivity and 17 hour battery life,
//               the XX99 Mark II headphones gives you superior sound, cutting-edge
//               technology, and a modern design aesthetic.
//             </p>
//           </div>
//           <div className='container mx-auto mb-[88px] md:mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-2 lg:flex lg:flex-col'>
//             <h3 className='uppercase text-h5 md:text-h3 mb-6'>In the box</h3>
//             <ul className='flex flex-col gap-2'>
//               <li className='flex items-center gap-6'>
//                 <span className='text-mobileMenu text-brightOrange'>x1</span>
//                 <span className='text-body opacity-50'>Headphone Unit</span>
//               </li>
//               <li className='flex items-center gap-6'>
//                 <span className='text-mobileMenu text-brightOrange'>x2</span>
//                 <span className='text-body opacity-50'>
//                   Replacement Earcups
//                 </span>
//               </li>
//               <li className='flex items-center gap-6'>
//                 <span className='text-mobileMenu text-brightOrange'>x1</span>
//                 <span className='text-body opacity-50'>User Manual</span>
//               </li>
//               <li className='flex items-center gap-6'>
//                 <span className='text-mobileMenu text-brightOrange'>x1</span>
//                 <span className='text-body opacity-50'>
//                   3.5mm 5m Audio Cable
//                 </span>
//               </li>
//               <li className='flex items-center gap-6'>
//                 <span className='text-mobileMenu text-brightOrange'>x1</span>
//                 <span className='text-body opacity-50'>Travel Bag</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className='container mx-auto flex flex-col gap-5 md:grid-rows-1 mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-[1fr,1.45fr] md:gap-5'>
//           <div className='flex flex-col justify-between gap-5'>
//             <div>
//               <img
//                 className='rounded-lg md:hidden'
//                 src='public/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
//                 alt=''
//               />
//               <img
//                 className='rounded-lg hidden md:block lg:hidden'
//                 src='public/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
//                 alt=''
//               />
//               <img
//                 className='rounded-lg hidden lg:block'
//                 src='public/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
//                 alt=''
//               />
//             </div>
//             <div className='img2'>
//               <img
//                 className='rounded-lg md:hidden'
//                 src='public/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
//                 alt=''
//               />
//               <img
//                 className='rounded-lg hidden md:block lg:hidden'
//                 src='public/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
//                 alt=''
//               />
//               <img
//                 className='rounded-lg hidden lg:block'
//                 src='public/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
//                 alt=''
//               />
//             </div>
//           </div>
//           <div>
//             <img
//               className='rounded-lg md:hidden'
//               src='public/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
//               alt=''
//             />
//             <img
//               className='rounded-lg hidden md:block lg:hidden'
//               src='public/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
//               alt=''
//             />
//             <img
//               className='rounded-lg hidden lg:block'
//               src='public/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
//               alt=''
//             />
//           </div>
//         </div>
//       </div>
//       <About></About>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default ProductDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../shared/Nav';
import About from '../shared/About';
import Footer from '../shared/Footer';
import AddToCart from '../shared/buttons/AddToCart';
import products from '../../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Nav></Nav>
      <div>
        <div className='container mx-auto mt-4 md:mt-8 mb-6 lg:mt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50'>
          <a className='text-body hover:underline' href=''>
            Go Back
          </a>
        </div>
        <div className='container mx-auto flex flex-col gap-8 md:max-w-[689px] md:grid md:grid-cols-2 lg:max-w-[1110px] md:gap-[69px] lg:gap-32 md:items-center md:mb-[120px]'>
          <div>
            <img
              className='mx-auto rounded-lg md:hidden'
              src={product.image.mobile}
              alt=''
            />
            <img
              className='mx-auto w-full h-auto object-cover rounded-lg hidden md:block lg:hidden'
              src={product.image.tablet}
              alt=''
            />
            <img
              className='mx-auto rounded-lg hidden lg:block'
              src={product.image.desktop}
              alt=''
            />
          </div>
          <div className='mx-auto flex flex-col gap-6 mb-[88px] md:mb-0'>
            <h6 className='text-newProduct uppercase text-brightOrange'>
              {product.new && 'New Product'}
            </h6>

            <h3 className='text-h4 md:text-h2 uppercase  lg:mx-0 lg:w-full'>
              {product.name}
            </h3>
            <p className='text-body opacity-50 md:max-w-[572px]'>
              {product.description}
            </p>
            <h6 className='text-h6'>{product.price}</h6>
            <AddToCart></AddToCart>
          </div>
        </div>
        <div className='container mx-auto lg:flex lg:gap-[125px] lg:max-w-[1110px]'>
          <div className='container mx-auto mb-[88px] md:max-w-[689px] lg:max-w-[1110px]'>
            <h2 className='uppercase text-h5 md:text-h3 mb-6'>Features</h2>
            <p className='text-body opacity-50'>{product.features}</p>
          </div>
          <div className='container mx-auto mb-[88px] md:mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-2 lg:flex lg:flex-col'>
            <h3 className='uppercase text-h5 md:text-h3 mb-6'>In the box</h3>
            <ul className='flex flex-col gap-2'>
              {product.inTheBox.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  <span className='text-mobileMenu text-brightOrange'>
                    {item.quantity}x
                  </span>
                  <span className='text-body opacity-50'>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='container mx-auto flex flex-col gap-5 md:grid-rows-1 mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-[1fr,1.45fr] md:gap-5'>
          <div className='flex flex-col justify-between gap-5'>
            <div>
              <img
                className='rounded-lg md:hidden'
                src={product.gallery.first.mobile}
                alt=''
              />
              <img
                className='rounded-lg hidden md:block lg:hidden'
                src={product.gallery.first.tablet}
                alt=''
              />
              <img
                className='rounded-lg hidden lg:block'
                src={product.gallery.first.desktop}
                alt=''
              />
            </div>
            <div className='img2'>
              <img
                className='rounded-lg md:hidden'
                src={product.gallery.second.mobile}
                alt=''
              />
              <img
                className='rounded-lg hidden md:block lg:hidden'
                src={product.gallery.second.tablet}
                alt=''
              />
              <img
                className='rounded-lg hidden lg:block'
                src={product.gallery.second.desktop}
                alt=''
              />
            </div>
          </div>
          <div>
            <img
              className='rounded-lg md:hidden'
              src={product.gallery.third.mobile}
              alt=''
            />
            <img
              className='rounded-lg hidden md:block lg:hidden'
              src={product.gallery.third.tablet}
              alt=''
            />
            <img
              className='rounded-lg hidden lg:block'
              src={product.gallery.third.desktop}
              alt=''
            />
          </div>
        </div>
      </div>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
