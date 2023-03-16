import React, { useState } from 'react';
import ProductCategory from './ProductCategoryNav';
import { Link } from 'react-router-dom';

function MobileMenuButton({ onClick }) {
  return (
    <button className='lg:hidden' onClick={onClick}>
      <img src='/assets/shared/mobile/hamburger.svg' alt='menu' />
    </button>
  );
}

function NavLinks() {
  return (
    <ul className='hidden lg:flex gap-[34px]'>
      <li>
        <Link
          to='/'
          className='hover:text-brightOrange transition-colors duration-300'>
          HOME
        </Link>
      </li>
      <li>
        <Link
          to='/headphones'
          className='hover:text-brightOrange transition-colors duration-300'>
          HEADPHONES
        </Link>
      </li>
      <li>
        <Link
          to='/speakers'
          className='hover:text-brightOrange transition-colors duration-300'>
          SPEAKERS
        </Link>
      </li>
      <li>
        <Link
          to='/earphones'
          className='hover:text-brightOrange transition-colors duration-300'>
          EARPHONES
        </Link>
      </li>
    </ul>
  );
}

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProductCategory, setShowProductCategory] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowProductCategory(false);
  }

  return (
    <header className='bg-pureBlack'>
      <nav className='mx-auto text-pureWhite text-subtitle flex justify-between py-8 max-w-[310px] md:max-w-[689px] lg:max-w-[1109px]'>
        <MobileMenuButton onClick={toggleMobileMenu} />
        <Link to='/'>
          <img src='/assets/shared/desktop/logo.svg' alt='audiophile-logo' />
        </Link>
        <NavLinks />
        <button id='shopping-cart'>
          <img
            src='/assets/shared/desktop/icon-cart.svg'
            alt='View shopping cart'
          />
        </button>
      </nav>
      {isMobileMenuOpen && <ProductCategory />}
    </header>
  );
}

export default Nav;
export { NavLinks };
