import React from 'react';

function ButtonBlack(props) {
  return (
    <button className='bg-pureBlack uppercase text-subtitle text-pureWhite px-[30px] py-[15px]  hover:bg-white hover:text-pureBlack hover:outline hover:outline-1 transition-colors duration-300'>
      <a href={props.href}>{props.children}</a>
    </button>
  );
}

export default ButtonBlack;
