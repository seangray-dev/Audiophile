import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import OrderConfirmationModal from '../shared/cart/OrderConfirmationModal';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';

const Backdrop = ({ onClick }) => (
  <motion.div
    className='fixed inset-0 bg-black opacity-40 z-40'
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.4 }}
    exit={{ opacity: 0 }}
  />
);

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showOrderConfirmationModal, setShowOrderConfirmationModal] =
    useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().integer().required(),
    address: yup.string().required(),
    zipCode: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    paymentMethod: yup
      .string()
      .oneOf(['e-Money', 'Cash on Delivery'])
      .required(),
    eMoneyNumber: yup.number().when('paymentMethod', {
      is: 'e-Money',
      then: yup.number().required(),
      otherwise: yup.number(),
    }),
    eMoneyPin: yup.number().when('paymentMethod', {
      is: 'e-Money',
      then: yup.number().required(),
      otherwise: yup.number(),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [paymentMethod, setPaymentMethod] = useState('eMoney');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0
  );

  // Calculate VAT as 20% of the product total, excluding shipping
  const VAT = Math.floor((totalPrice / 100) * 20);

  // Calculate the grand total by adding the total, VAT, and shipping
  const grandTotal = totalPrice + 50;

  const onSubmit = (data) => {
    setShowOrderConfirmationModal(true);
  };

  return (
    <div className='bg-paleGray pb-24'>
      {showOrderConfirmationModal && (
        <Backdrop
          onClick={() => setShowOrderConfirmationModal(false)}
          showBlur={true}
        />
      )}
      <div className='container mx-auto pt-4 md:pt-8 mb-6 lg:pt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50'>
        <a
          className=' cursor-pointer text-body hover:underline'
          onClick={() => navigate(-1)}>
          Go Back
        </a>
      </div>

      <form>
        <div className='container mx-auto max-w-[327px] bg-white px-6 pt-6 pb-8 rounded-lg mb-8'>
          <h2 className='text-h4 uppercase mb-8'>Checkout</h2>
          <h3 className='text-brightOrange text-subtitle uppercase mb-4'>
            Billing Details
          </h3>
          <div className='flex flex-col gap-6 mb-8'>
            <div className='flex flex-col gap-2'>
              <label className='text-[12px] font-bold'>Name</label>
              <input
                className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                placeholder='Alexei Ward'
                {...register('name')}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-[12px] font-bold'>Email Address</label>
              <input
                className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                placeholder='alexei@mail.com'
                {...register('email')}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <div className='flex flex-col gap-2'>
                <label className='text-[12px] font-bold'>Phone</label>
                <input
                  className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                  placeholder='+1 202-555-0136'
                  {...register('phone')}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>
            </div>
          </div>
          <h3 className='text-brightOrange text-subtitle uppercase mb-4'>
            Shipping Info
          </h3>
          <div className='flex flex-col gap-6 mb-8'>
            <div className='flex flex-col gap-2'>
              <label className='text-[12px] font-bold'> Your Address</label>
              <input
                className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                placeholder='1137 Williams Avenue'
                {...register('address')}
              />
              {errors.address && <p>{errors.address.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-[12px] font-bold'>Zip Code</label>
              <input
                className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                placeholder='10001'
                {...register('zip')}
              />
              {errors.zip && <p>{errors.zip.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-[12px] font-bold'>City</label>
              <input
                className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                placeholder='New York'
                {...register('city')}
              />
              {errors.city && <p>{errors.city.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-[12px] font-bold'>Country</label>
              <input
                className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                placeholder='United States'
                {...register('country')}
              />
              {errors.country && <p>{errors.country.message}</p>}
            </div>
          </div>
          <h3 className='text-brightOrange text-subtitle uppercase mb-4'>
            Payment Details
          </h3>
          <h2 className='font-bold text-[12px]'>Payment Method</h2>
          <div className='flex flex-col'>
            <div>
              <input
                type='radio'
                id='eMoney'
                value='eMoney'
                {...register('paymentMethod')}
                checked={paymentMethod === 'eMoney'}
                onChange={handlePaymentMethodChange}
              />
              <label
                htmlFor='eMoney'
                className='cursor-pointer text-[14px] border border-silver flex items-center truncate font-semibold rounded-lg py-2 pl-[52px]'>
                e-Money
              </label>
            </div>

            <div>
              <input
                type='radio'
                id='cashOnDelivery'
                value='cashOnDelivery'
                {...register('paymentMethod')}
                checked={paymentMethod === 'cashOnDelivery'}
                onChange={handlePaymentMethodChange}
              />
              <label
                htmlFor='cashOnDelivery'
                className='cursor-pointer text-[14px] border border-silver flex items-center truncate font-semibold rounded-lg py-2 pl-[52px]'>
                Cash On Delivery
              </label>
            </div>
          </div>
          {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
          {paymentMethod === 'eMoney' && (
            <motion.div
              className='mt-8 flex flex-col gap-6'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}>
              <div className='flex flex-col gap-2'>
                <label className='text-[12px] font-bold'>e-Money Number</label>
                <input
                  className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                  placeholder='238521993'
                  {...register('eMoneyNumber', { required: true })}
                />
                {errors.eMoneyNumber && <p>This field is required</p>}
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-[12px] font-bold'>e-Money Pin</label>
                <input
                  className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                  placeholder='6891'
                  {...register('eMoneyPin', { required: true })}
                />
                {errors.eMoneyPin && <p>This field is required</p>}
              </div>
            </motion.div>
          )}
        </div>
        <div className='container mx-auto max-w-[327px] bg-white px-6 pt-6 pb-8 rounded-lg'>
          <h3 className='text-h6 uppercase mb-8'>Summary</h3>
          <div className='flex flex-col gap-6'>
            <div>
              <div className='cart-items flex flex-col gap-6 mb-8'>
                {cartItems.map((item) => (
                  <div
                    className='cart-item flex justify-between gap-4 items-center'
                    key={item.id}>
                    <div className='flex items-center gap-4'>
                      <div className='cart-item-image'>
                        <img
                          className='rounded-lg max-w-[64px]'
                          src={item.image.cart}
                          alt={item.name}
                        />
                      </div>
                      <div className='cart-item-details'>
                        <h3 className='cart-item-title text-mobileMenu mb-1'>
                          {item.name
                            .replace(/(headphones|speaker|earphones)/i, '')
                            .replace(/(mark)/i, 'MK')
                            .replace(/(wireless)/i, '')
                            .trim()}
                        </h3>
                        <div className='cart-item-price text-mobileMenu opacity-50'>
                          ${item.price}
                        </div>
                      </div>
                    </div>
                    <div className='opacity-50 font-extrabold'>
                      x{item.quantity}
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-body opacity-50 uppercase'>Total</p>
                  <span className='text-h6'>$ {totalPrice}</span>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-body opacity-50 uppercase'>Shipping</p>
                  <span className='text-h6'>$ 50</span>
                </div>

                <div className='flex justify-between items-center'>
                  <p className='text-body opacity-50 uppercase'>
                    VAT (Included)
                  </p>
                  <span className='text-h6'>$ {VAT}</span>
                </div>
                <div className='flex justify-between items-center mt-4'>
                  <p className='text-body opacity-50 uppercase'>Grand total</p>
                  <span className='text-h6 text-brightOrange'>
                    $ {grandTotal}
                  </span>
                </div>
              </div>
            </div>

            <motion.button
              className='bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite py-[15px]'
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={handleSubmit(onSubmit)}>
              Continue & Pay
            </motion.button>
          </div>
        </div>
      </form>
      {showOrderConfirmationModal && (
        <>
          <Backdrop />
          <OrderConfirmationModal cartItems={cartItems} />
        </>
      )}
    </div>
  );
};
export default Checkout;
