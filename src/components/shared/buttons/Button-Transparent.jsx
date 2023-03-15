import React from 'react';
import { motion } from 'framer-motion';

function ButtonTransparent(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className='bg-transparent uppercase text-subtitle text-pureBlack px-[30px] py-[14px] hover:bg-pureBlack hover:text-pureWhite outline outline-1 transition-colors duration-300'>
      <a href={props.href}>{props.children}</a>
    </motion.button>
  );
}

export default ButtonTransparent;
