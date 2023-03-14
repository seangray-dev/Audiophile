import React from 'react';

function ButtonShop(props) {
  return (
    <button>
      <a
        className='text-subtitle text-gray hover:text-brightOrange transition-colors duration-300'
        href={props.href}>
        SHOP{' '}
        <img
          className='inline-block align-middle'
          src='/assets/shared/desktop/icon-arrow-right.svg'
          aria-label='hidden'></img>
      </a>
    </button>
  );
}

export default ButtonShop;
