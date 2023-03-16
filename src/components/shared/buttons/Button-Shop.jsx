import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ButtonShop(props) {
  const handleClick = (e) => {
    e.preventDefault();

    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth',
    };

    window.scrollTo(options);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Link
        className='text-subtitle text-gray hover:text-brightOrange transition-colors duration-300'
        to={props.to}>
        SHOP{' '}
        <img
          className='inline-block align-middle -mt-1'
          src='/assets/shared/desktop/icon-arrow-right.svg'
          aria-label='hidden'
        />
      </Link>
    </motion.button>
  );
}

export default ButtonShop;
