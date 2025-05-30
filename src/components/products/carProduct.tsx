

'use client'

import { Car } from '@/components/types/products'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ProductDataType{
carDatas:Car[]
}

const ProductData = ({carDatas}:ProductDataType) => {



    const carTypes = ['sedan','suv','luxury']
  
    const [cartype,setcarType] = useState<string>('sedan')
    const [filteredCars,setFilterdcars] = useState<Car[]>(carDatas)
   
 
    useEffect(()=>{
        if(cartype){
            const updateCar = carDatas.filter((item)=>item.type===cartype)
            setFilterdcars(updateCar)
        }else{
            setFilterdcars(carDatas)
        }
    },[carDatas,cartype])

    console.log("type",filteredCars)
    
  

  return (
    <div className='mt-5 '>
        <h1 className='px-20 font-medium text-[1.5em]'>The Mosted Searched Car</h1>
        
        <div className='px-20 flex gap-5 mt-2 font-bold'>
     

            {carTypes.map((item)=>{
                return(
                    <div key={item}>
                        <button className={cartype===item? `underline text-amber-500` :''} onClick={()=>setcarType(item)}>{item.toUpperCase()}</button>
                    </div>
                )
            })}
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 items-center gap-3 p-1 sm:px-20 mt-3">
        {filteredCars.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-[10]  border-1 border-gray-200"
            >
              <Image
                src={item.image}
                alt={item.brand}
                width={250}
                height={210}
                className="w-full h-[180px] cursor-pointer rounded-t-[10]"
              />

              <div className="flex justify-between mt-1 items-center px-3">
                <p className="text-black font-bold">
                  {item.brand.toLocaleUpperCase()}
                </p>
                <p className="font-medium text-[15px]">
                  {item.pricePerDay}/<span className="text-[10px]">Day</span>
                </p>
              </div>
              <div></div>

              <div className=" p-3  rounded-[10]">
                <button className="border-1 border-blue-700 cursor-pointer p-2 font-medium rounded-[10]  w-full ">
                  Reserve Vehicle
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ProductData

