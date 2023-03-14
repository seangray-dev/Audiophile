import React from 'react';

function ButtonOrange(props) {
  return (
    <button className='bg-brightOrange uppercase text-subtitle text-pureWhite px-[30px] py-[15px] hover:bg-brightOrangeHover transition-colors duration-300'>
      <a href={props.href}>{props.children}</a>
    </button>
  );
}

export default ButtonOrange;
