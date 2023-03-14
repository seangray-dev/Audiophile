import React from 'react';

function ButtonWhite(props) {
  return (
    <button className='bg-pureWhite uppercase text-subtitle text-pureBlack px-[30px] py-[14px] hover:py-[15px] hover:bg-pureBlack hover:text-pureWhite outline hover:outline-none outline-1 transition-colors duration-300'>
      <a href={props.href}>{props.children}</a>
    </button>
  );
}

export default ButtonWhite;
