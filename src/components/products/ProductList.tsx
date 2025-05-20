"use client"
import Image from 'next/image';
import React from 'react'
import { ProductsType } from '../types/products';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { Fuel, Settings, User } from 'lucide-react';


interface ProductListType {
  getItems: ProductsType[]
}

export const ProductList = ({ getItems }: ProductListType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 items-center gap-3 px'>

      {getItems.map((item, index) => {
        return (
          <div key={index} className=' bg-[#fff] p-1'>

            <Image
              src={item.thumbnail.url}
              alt={item.title}
              width={210}
              height={210}
              className="w-auto h-auto cursor-pointer"
              onClick={() =>
                router.push(`/products/${item.slug}`)
              }
            />
            <hr className='text-gray-300'/>
            <div className='flex justify-between mt-1.5 items-center'>
              <p className='text-blue-900 font-bold'>{item.title}</p>
               <p className='font-bold text-[12px]'>{item.price}/Day</p>
            </div>
            <div>
             
            </div>

            <div className='flex justify-between  items-center font-semibold mt-1'>
              <span className='flex items-center'><Fuel  className=' text-gray-400 w-[15px]'/><p> {item.milage}</p></span>
              <div  className='flex items-center '><Settings className=' text-gray-400 w-[15px]'/><p>{item.transmission}</p>  </div>
              <span  className='flex items-center '><User className=' text-gray-400 w-[15px]'/><p> {item.capacity}</p></span>
            </div>
<div className='text-amber-50'>
 <button className='bg-gradient-to-l from-[#1313f6] to-[#b1b1db] cursor-pointer p-1 w-full' onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}>add to cart</button>
</div>
           


          </div>
        );
      })}

    </div>
  )
}
