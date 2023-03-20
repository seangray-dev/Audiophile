import React, { useState } from 'react';
import ButtonOrange from './Button-Orange';

const AddToCart = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    // Add the product and quantity to the cart
    // You can use a state management library or a global store to manage the cart state
    onAddToCart(product, quantity);
    console.log(`Added ${quantity} product(s) to the cart`);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='flex justify-between gap-4 max-w-[296px]'>
      <div className='flex gap-[20px] place-items-center bg-paleSilver mx-auto px-6'>
        <button
          type='button'
          className='opacity-25 py-4  focus:outline-none '
          onClick={handleDecrement}>
          -
        </button>
        <input
          className='bg-paleSilver py-4 w-4 text-center focus:outline-none text-subtitle'
          type='number'
          min='1'
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button
          type='button'
          className='opacity-25 py-4 focus:outline-none '
          onClick={handleIncrement}>
          +
        </button>
      </div>
      <ButtonOrange onClick={handleAddToCart}>Add To Cart</ButtonOrange>
    </div>
  );
};

export default AddToCart;
