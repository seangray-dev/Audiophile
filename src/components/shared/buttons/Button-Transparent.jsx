import React from 'react';

function ButtonTransparent(props) {
  return (
    <button className='bg-transparent uppercase text-subtitle text-pureBlack px-[30px] py-[14px] hover:bg-pureBlack hover:text-pureWhite outline outline-1 transition-colors duration-300'>
      <a href={props.href}>{props.children}</a>
    </button>
  );
}

export default ButtonTransparent;
