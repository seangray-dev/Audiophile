import React, { useState } from 'react';
import ProductCategory from './ProductCategory';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProductCategory, setShowProductCategory] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowProductCategory(false);
  }

  return (
    <header className='bg-pureBlack'>
      <nav className='mx-auto text-pureWhite flex justify-between py-8 max-w-[310px] md:max-w-[689px] lg:max-w-[1109px]'>
        <button className='lg:hidden' onClick={toggleMobileMenu}>
          <img src='/assets/shared/mobile/hamburger.svg' alt='menu' />
        </button>
        <a href='/'>
          <img src='/assets/shared/desktop/logo.svg' alt='audiophile-logo' />
        </a>
        <ul className='hidden lg:flex gap-[34px]'>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/products'>HEADPHONES</a>
          </li>
          <li>
            <a href='/about'>SPEAKERS</a>
          </li>
          <li>
            <a href='/contact'>EARPHONES</a>
          </li>
        </ul>
        {/* add link to shopping cart */}
        <a href=''>
          <img
            src='/assets/shared/desktop/icon-cart.svg'
            alt='View shopping cart'
          />
        </a>
      </nav>
      {isMobileMenuOpen && <ProductCategory></ProductCategory>}
    </header>
  );
}

export default Nav;
