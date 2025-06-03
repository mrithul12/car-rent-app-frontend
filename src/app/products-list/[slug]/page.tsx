

import { ProductsType } from '@/components/types/products';
import { getProductDetails } from '@/lib/api';
import Image from 'next/image';
import React from 'react'


interface pageParams{
    params:Promise<{
        slug:string;
    }>
}
export default async function ProductDetails({params}:pageParams) {
    const {slug} = await params;
 
    
    const updateItems:ProductsType[] = await getProductDetails(slug)
    
  return (
   <div className='sm:px-20 p-5 sm:flex  gap-5 '>
    <div className=''>
        {updateItems.map((item,index)=>{
            return(
                <div key={index} >
                    <div className='sm:flex items-center '>
                        <div>
                       <Image src={item.thumbnail.url} alt={item.title} width={1000} height={1000} className='w-100 ' />
                    </div>

                    <div className='flex sm:flex-col gap-2'>
                      {item.images.map((item,index)=>{
                         return(
                            <div key={index} className=''>
                                <Image src={item.url} alt={item.url} width={1000} height={1000} className='w-50 rounded-[10]'/>
                            </div>
                         )
                      })}
                    </div>
                    </div>
                   


                </div>
            )
        })}
        
    </div>
    <div className='mt-5 sm:mt-0'>
        {updateItems.map((item,index)=>{
            return(
                <div key={index}>
                    <div className='font-bold'>
                       <h1>{item.title.toUpperCase()} {item.company.toUpperCase()}</h1>
                    </div>
                    <div className='flex gap-5 text-gray-500 mt-2 '>
                       <p>{item.transmission}</p>
                       <p>{item.capacity} Seater</p>
                       <p>{item.milage} Milage</p>
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li><b>Mileage</b> <span className='text-[13px] text-gray-500'>Unlimited mileage available on select models.</span></li>
                            <li><b>Fuel Policy</b> <span className='text-[13px] text-gray-500'>Full-to-full fuel policy for transparent pricing.</span></li>
                            <li><b>Insurance</b> <span className='text-[13px] text-gray-500'>Comprehensive coverage included.</span></li>
                            <li><b>Requirements</b> <span className='text-[13px] text-gray-500'>Valid license & ID required. Must be 21+</span></li>
                    
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <button className='bg-blue-700 text-[#fff] w-full px-10 rounded-[10] p-2' >Add to cart</button>
                    </div>
                </div>
                
            )
        })}
    </div>
   </div>
  )
}
                    