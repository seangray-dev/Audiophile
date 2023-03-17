import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ButtonShop(props) {
  const handleClick = () => {
    const options = {
      top: 0,
      left: 0,
    };

    window.scrollTo(options);
  };

  return (
    <motion.button
      className='text-gray hover:text-brightOrange transition-colors duration-300'
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Link className='text-subtitle ' to={props.to} onClick={props.onClick}>
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
