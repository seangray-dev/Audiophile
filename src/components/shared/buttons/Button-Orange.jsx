import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const handleClick = () => {
  const options = {
    top: 0,
    left: 0,
  };

  window.scrollTo(options);
};

function ButtonOrange({ to, children }) {
  return (
    <motion.button
      className='bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]'
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}>
      <Link to={to}>{children}</Link>
    </motion.button>
  );
}

export default ButtonOrange;
