import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import Cart from './cart/Cart';

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
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItemCount, setCartItemCount] = useState(0);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowMobileNav(false);
  }

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function handleCloseCart() {
    setCartOpen(false);
    setCartItemCount(cartItems.length);
  }

  return (
    <div>
      <header className='bg-pureBlack sticky top-0 z-50 md:px-4'>
        <nav className='mx-auto text-pureWhite text-subtitle flex justify-between py-8 max-w-[310px] md:max-w-[689px] lg:max-w-[1109px] border-b border-b-white border-opacity-20'>
          <MobileMenuButton onClick={toggleMobileMenu} />
          <Link to='/'>
            <img src='/assets/shared/desktop/logo.svg' alt='audiophile-logo' />
          </Link>
          <NavLinks />
          <div className='relative'>
            <button id='shopping-cart' onClick={toggleCart}>
              <img
                src='/assets/shared/desktop/icon-cart.svg'
                alt='View shopping cart'
              />
            </button>
            {cartItemCount > 0 && (
              <div className='items-cart absolute bg-red-600 top-0 right-0 translate-y-1/2 translate-x-1/2 rounded-full py-0 px-1'>
                {cartItemCount}
              </div>
            )}
          </div>
        </nav>
        {isMobileMenuOpen && <MobileNav />}
      </header>
      {cartOpen && (
        <Cart
          updateCartItemCount={setCartItemCount}
          onClose={handleCloseCart}
        />
      )}
    </div>
  );
}

export default Nav;
export { NavLinks };
