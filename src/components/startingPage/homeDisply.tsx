import React from 'react'
import { carContent } from '../hardcodeDatas/Data'

const HomeDisply = () => {
  return (
    <div className='grid sm:grid-cols-4 sm:mt-20 sm:mb-20'>
          {carContent.map((item,index)=>{
            return(
                <div key={index} className='border-1 p-5 border-gray-100'>
                    <h1 className='font-bold text-[1.3em]'>{item.title}</h1>
                    <p className='text-gray-500 mt-5'>{item.description}</p>
                </div>
            )
          })}
    </div>
  )
}

export default HomeDisply