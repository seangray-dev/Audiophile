import { motion } from 'framer-motion';

function ButtonBlack(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      duration={{ duration: 0.3 }}
      className='bg-pureBlack uppercase text-subtitle text-pureWhite px-[30px] py-[15px]  hover:bg-white hover:text-pureBlack hover:outline hover:outline-1 transition-colors duration-300'>
      <a href={props.href}>{props.children}</a>
    </motion.button>
  );
}

export default ButtonBlack;
