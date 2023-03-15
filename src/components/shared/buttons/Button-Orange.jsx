import React from 'react';
import { motion } from 'framer-motion';

function ButtonOrange(props) {
  return (
    <motion.button
      className='bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px]'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}>
      <a href={props.href}>{props.children}</a>
    </motion.button>
  );
}

export default ButtonOrange;
