import React from 'react';
import { motion } from 'framer-motion';

function ButtonShop(props) {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <a
        className='text-subtitle text-gray hover:text-brightOrange transition-colors duration-300'
        href={props.href}>
        SHOP{' '}
        <img
          className='inline-block align-middle -mt-1'
          src='/assets/shared/desktop/icon-arrow-right.svg'
          aria-label='hidden'
        />
      </a>
    </motion.button>
  );
}

export default ButtonShop;
