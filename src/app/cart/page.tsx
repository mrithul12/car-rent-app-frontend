'use client'


import {  removeCart } from '@/store/slices/cartSlice'
import { RootState } from '@/store/store'
import {  CircleX, Fuel, Settings, User } from 'lucide-react'
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
      {cartItems.length>0 && <h1 className='sm:px-20 px-2 mt-1 font-medium sm:text-[2em] text-[1.5em]'>Cart Items</h1>}
      <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2   text-nowrap sm:px-20 '>

        {cartItems.map((item) => {
          return (
            <div key={item.id} className='overflow-hidden bg-[#fff]   border-1 border-gray-200 m-1 rounded-[10] relative'>

              <Image
                src={item.thumbnail.url}
                alt={item.title}
                width={500}
                height={500}
                className="w-[300px] mt-5 "

              />
              {/* <div className='flex justify-between items-center px-1'>
                <p className=' flex font-bold items-center'><span className='text-gray-400 text-[12px]'>Qty : </span> {item.quantity}</p>
                <div className='grid '>
                  <button onClick={() => dispatch(incrementQuantity(item))} className=' border-black text-green-600 font-bold rounded-[5]  cursor-pointer'><ChevronUp className='w-[15px]' /></button>
                  <button onClick={() => dispatch(decrementQuantity(item))} className=' border-black text-red-600 font-bold rounded-[5]  cursor-pointer'><ChevronDown className='w-[15px]' /></button>
                </div>

              </div> */}
          

              <div className='flex justify-between mt-1.5 items-center px-2'>
                <p className='text-blue-900 font-bold'>{item.title.toLocaleUpperCase()}</p>
                <p className='font-bold text-[12px]'>${item.price}/Day</p>
              </div>
              <div className='flex justify-between  items-center font-semibold text-[12px] mt-2 px-2'>
                <span className='flex items-center gap-1'><Fuel className=' text-gray-400 w-[15px]' /><p> {item.milage}</p></span>
                <div className='flex items-center gap-1'><Settings className=' text-gray-400 w-[15px]' /><p>{item.transmission}</p>  </div>
                <span className='flex items-center gap-1'><User className=' text-gray-400 w-[15px]' /><p> {item.capacity}</p></span>
              </div>
            
                <div className=' flex justify-center p-3'>
                  <button onClick={()=>route.push(`/cart/${item.id}`)} className='p-2 rounded-[10] border-blue-700 w-full cursor-pointer border-1  font-medium'>Check Out</button>
                </div>
                <div className='absolute top-2 right-2 text-gray-400 font-light cursor-pointer'>
                  <CircleX onClick={() => dispatch(removeCart(item))} className='font-light'/>
                </div>
           
            </div>
          )
        })}
      </div>

      <div>
        <h1 className='sm:px-20 px-2 font-medium sm:text-[2em] text-[1.5em]'>All Items...</h1>
        <EmptyCart />
      </div>

    </div>
  )
}

export default Cart