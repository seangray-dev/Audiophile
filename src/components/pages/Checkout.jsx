import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  console.log('cartItems', cartItems);

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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='bg-paleGray '>
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
              />
              <label
                htmlFor='cashOnDelivery'
                className='cursor-pointer text-[14px] border border-silver flex items-center truncate font-semibold rounded-lg py-2 pl-[52px]'>
                Cash On Delivery
              </label>
            </div>
          </div>
          {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
          <div className='mt-8 flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-[12px] font-bold'>e-Money Number</label>
              <input
                className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                placeholder='238521993'
                {...register('phone')}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-[12px] font-bold'>e-Money Pin</label>
              <input
                className='border border-silver rounded-lg focus:outline-none focus:border-brightOrange pl-4 py-2 placeholder:text-[14px]'
                placeholder='6891'
                {...register('phone')}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
          </div>
        </div>
        <div className='container mx-auto max-w-[327px] bg-white px-6 pt-6 pb-8 rounded-lg'>
          <h3 className='text-h6 uppercase mb-8'>Summary</h3>
          <div className='flex flex-col gap-6'>
            <div></div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Checkout;
