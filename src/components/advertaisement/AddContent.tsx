import Image from 'next/image'
import React from 'react'

const addBanner = ['/images/short-banner.jpg','/images/short-banner-2.jpg','/images/short-banner-3.jpg','/images/short-banner-4.jpg']
const AddContent = () => {
  return (
    <div className='sm:px-20 sm:p-10 p-5'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 place-items-center'>
            {addBanner.map((item)=>{
                return(
                    <div key={item}>
                        <Image src={item} alt='banner' width={220} height={220} className='h-40 sm:h-[230px] w-[200px] sm:w-[230px] rounded-[10] transition-transform duration-300 hover:scale-105'/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AddContent