'use client'


import { decrementQuantity, incrementQuantity, removeCart } from '@/store/slices/cartSlice'
import { RootState } from '@/store/store'
import { ChevronDown, ChevronUp, Fuel, Settings, User } from 'lucide-react'
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
    <>
      {cartItems.length < 1 && <Empty/>}

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 items-center gap-3 p-2'>

        {cartItems.map((item) => {
          return (
            <div key={item.id} className=' bg-[#fff] p-1'>

              <Image
                src={item.thumbnail.url}
                alt={item.title}
                width={210}
                height={210}
                className="w-auto h-auto"

              />
              <div className='flex justify-between items-center'>
                <p className=' flex font-bold items-center'><span className='text-gray-400 text-[12px]'>Qty : </span> {item.quantity}</p>
                <div className='grid '>
                  <button onClick={() => dispatch(incrementQuantity(item))} className=' border-black text-green-600 font-bold rounded-[5]  cursor-pointer'><ChevronUp className='w-[15px]' /></button>
                  <button onClick={() => dispatch(decrementQuantity(item))} className=' border-black text-red-600 font-bold rounded-[5]  cursor-pointer'><ChevronDown className='w-[15px]' /></button>
                </div>

              </div>
              <hr className='text-gray-300' />

              <div className='flex justify-between mt-1.5 items-center'>
                <p className='text-blue-900 font-bold'>{item.title}</p>
                <p className='font-bold text-[12px]'>${item.price}/Day</p>
              </div>
              <div className='flex justify-between  items-center font-semibold mt-2'>
                <span className='flex items-center gap-1'><Fuel className=' text-gray-400 w-[15px]' /><p> {item.milage}</p></span>
                <div className='flex items-center gap-1'><Settings className=' text-gray-400 w-[15px]' /><p>{item.transmission}</p>  </div>
                <span className='flex items-center gap-1'><User className=' text-gray-400 w-[15px]' /><p> {item.capacity}</p></span>
              </div>
              <div className='flex text-[#fff]'>
                <div className='w-[50%] bg-amber-500 flex justify-center'>
                  <button onClick={() => dispatch(removeCart(item))} className='p-1 cursor-pointer'>Remove Cart</button>
                </div>
                <div className='w-[50%] bg-blue-500 flex justify-center'>
                  <button onClick={()=>route.push(`/cart/${item.id}`)} className='p-1 cursor-pointer'>Check Out</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div>
        <EmptyCart />
      </div>

    </>
  )
}

export default Cart