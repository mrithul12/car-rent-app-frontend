'use client'


import { decrementQuantity, incrementQuantity, removeCart } from '@/store/slices/cartSlice'
import { RootState } from '@/store/store'
import { ChevronDown, ChevronUp, CircleX, Fuel, Settings, User } from 'lucide-react'
import Image from 'next/image'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from './emptyCart'
import Empty from './empty'
import { useRouter } from 'next/navigation'


const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cartItem.cart)
  const dispatch = useDispatch();
  const route = useRouter();

  return (
    <div className=''>
     
      {cartItems.length < 1 && <Empty/>}
      {cartItems.length>0 && <h1 className='px-4 mt-1 font-medium'>Cart Items</h1>}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 items-center gap-1 text-nowrap px-4 '>

        {cartItems.map((item) => {
          return (
            <div key={item.id} className=' bg-[#fff] m-1 rounded-t-[10] relative'>

              <Image
                src={item.thumbnail.url}
                alt={item.title}
                width={210}
                height={210}
                className="w-auto h-auto  rounded-t-[10]"

              />
              <div className='flex justify-between items-center px-1'>
                <p className=' flex font-bold items-center'><span className='text-gray-400 text-[12px]'>Qty : </span> {item.quantity}</p>
                <div className='grid '>
                  <button onClick={() => dispatch(incrementQuantity(item))} className=' border-black text-green-600 font-bold rounded-[5]  cursor-pointer'><ChevronUp className='w-[15px]' /></button>
                  <button onClick={() => dispatch(decrementQuantity(item))} className=' border-black text-red-600 font-bold rounded-[5]  cursor-pointer'><ChevronDown className='w-[15px]' /></button>
                </div>

              </div>
              <hr className='text-gray-300' />

              <div className='flex justify-between mt-1.5 items-center px-1'>
                <p className='text-blue-900 font-bold'>{item.title}</p>
                <p className='font-bold text-[12px]'>${item.price}/Day</p>
              </div>
              <div className='flex justify-between  items-center font-semibold mt-2 px-1'>
                <span className='flex items-center gap-1'><Fuel className=' text-gray-400 w-[15px]' /><p> {item.milage}</p></span>
                <div className='flex items-center gap-1'><Settings className=' text-gray-400 w-[15px]' /><p>{item.transmission}</p>  </div>
                <span className='flex items-center gap-1'><User className=' text-gray-400 w-[15px]' /><p> {item.capacity}</p></span>
              </div>
            
                <div className='bg-[#0606ce] flex justify-center'>
                  <button onClick={()=>route.push(`/cart/${item.id}`)} className='p-1 cursor-pointer text-[#fff] font-medium'>Check Out</button>
                </div>
                <div className='absolute top-2 right-2 text-blue-700 cursor-pointer'>
                  <CircleX onClick={() => dispatch(removeCart(item))}/>
                </div>
           
            </div>
          )
        })}
      </div>

      <div>
        <h1 className='px-4 font-medium'>All Items...</h1>
        <EmptyCart />
      </div>

    </div>
  )
}

export default Cart