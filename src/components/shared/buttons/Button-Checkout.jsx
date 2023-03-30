import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ButtonCheckout({ to, children }) {
  return (
    <motion.button
      className='bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px]'
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}>
      <Link to={'./checkout'}>{children}</Link>
    </motion.button>
  );
}

export default ButtonCheckout;
