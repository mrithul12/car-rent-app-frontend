import Image from 'next/image'
import React from 'react'
import { content } from '../hardcodeDatas/Data'

const Display = () => {
  return (
    <div className='grid sm:grid-cols-2 sm:h-100 place-items-center p-5 sm:mb-20'>
   
       <div className=''>
        <Image src={'/images/key.jpg'} alt='key' width={500} height={500} className=''/>
       </div>
       <div>
        {content.map((item,index)=>{
            return(
                <div key={index}>
                     <h1 className='font-bold text-[1.8em]'>{item.title}</h1>
                     <p className='mt-10 text-gray-500'>{item.description}</p>
                </div>
            )
        })}
       </div>

    </div>
  )
}

export default Display