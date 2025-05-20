'use client'


import { ProductList } from '@/components/products/ProductList'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProducts } from '@/store/slices/productSlice'
import React, { useEffect } from 'react'


const EmptyCart =  () => {
    const products = useAppSelector((state)=>state.product.product)

    const dispatch = useAppDispatch()

    useEffect(()=>{
      dispatch(fetchProducts())
    },[dispatch])



  
  return (
    <div>
      
        <div className='w-full  flex justify-center items-center'>
    
         <ProductList getItems={products}  /> 
        </div>

    </div>
  )
}

export default EmptyCart