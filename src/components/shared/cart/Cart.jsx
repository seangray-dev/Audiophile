import { React, useState } from 'react';
import ButtonCheckout from '../buttons/Button-Checkout';

function Cart(props) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'XX99 MK II',
      image: '/assets/cart/image-xx99-mark-two-headphones.jpg',
      price: 2999,
      quantity: 1,
    },
    {
      id: 1,
      name: 'XX99 MK II',
      image: '/assets/cart/image-xx99-mark-two-headphones.jpg',
      price: 2999,
      quantity: 1,
    },
    {
      id: 1,
      name: 'XX99 MK II',
      image: '/assets/cart/image-xx99-mark-two-headphones.jpg',
      price: 2999,
      quantity: 1,
    },
  ]);

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });

    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    // TODO: Implement checkout functionality
  };

  const total = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div className='cart bg-pureWhite pt-8 px-7 rounded-lg max-w-[327px] mx-auto'>
      <div className='container mx-auto'>
        <div className='cart-header flex justify-between mb-8'>
          <h2 className='cart-title text-h6'>Cart ({cartItems.length})</h2>
          <button
            className='underline text-body opacity-50'
            onClick={handleRemoveAll}>
            Remove all
          </button>
        </div>
        {cartItems.length > 0 ? (
          <div className='cart-items flex flex-col gap-6'>
            {cartItems.map((item) => (
              <div
                className='cart-item flex justify-between gap-4 items-center'
                key={item.id}>
                <div className='cart-item-image'>
                  <img
                    className='rounded-lg max-w-[64px]'
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className='cart-item-details'>
                  <h3 className='cart-item-title text-mobileMenu'>
                    {item.name}
                  </h3>
                  <div className='cart-item-price text-mobileMenu opacity-50'>
                    ${item.price}
                  </div>
                </div>
                <div className='flex justify-between gap-4 max-w-[96px]'>
                  <div className='flex gap-[20px] place-items-center bg-paleSilver mx-auto px-2'>
                    <button
                      type='button'
                      className='opacity-25 py-2 focus:outline-none '>
                      -
                    </button>
                    <input
                      className='bg-paleSilver py-2 w-4 text-center focus:outline-none text-subtitle'
                      type='number'
                      min='1'
                      value='0'
                    />
                    <button
                      type='button'
                      className='opacity-25 py-2 focus:outline-none '>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className='cart-total flex justify-between'>
              <span className='uppercase opacity-50 text-body'>Total</span>
              <span className='text-h6'>${total.toFixed(2)}</span>
            </div>
            <div className='mx-auto mb-8'>
              <ButtonCheckout>Checkout</ButtonCheckout>
            </div>
          </div>
        ) : (
          <div className='cart-empty text-center text-h6 mb-8'>
            Your cart is empty
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
