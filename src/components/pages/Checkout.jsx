import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='container mx-auto mt-4 md:mt-8 mb-6 lg:mt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50'>
        <a className='text-body hover:underline' onClick={() => navigate(-1)}>
          Go Back
        </a>
      </div>

      <div className='container mx-auto bg-paleGray'>
        <h1>Checkout</h1>
      </div>
    </div>
  );
};

export default Checkout;
