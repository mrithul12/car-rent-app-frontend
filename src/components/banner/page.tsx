import Image from 'next/image'
import React from 'react'


const Banner = () => {
  return (
    
    <div className='grid  sm:grid-cols-2 p-4  gap-2 text-[#fff]'>
      <div className='bg-gradient-to-l from-[#1313f6] to-[#b1b1db] rounded-[5] p-1 flex flex-col justify-between'>
        <div className=''>
          <h1 className='text-[2em] font-bold leading-9'>Elite Wheels for Every Destination</h1>
          <p className=' text-[0.7em]'>Your perfect ride is just a click away. Rent now, drive easy</p>
          <button className=' bg-[#2d2dde] text-sm pb-1 px-3 rounded-xl mt-2'>Rent Now</button>

        </div>
        <div className='flex justify-end'>
          <Image
            src='/blackcar.png'
            width={300}
            height={110}
            alt='car'
            className='h-auto w-auto'
          />
        </div>
      </div>
      <div className='hidden sm:flex bg-gradient-to-l from-[#1313f6] to-[#b1b1db] rounded-[5] p-1  flex-col justify-between'>
        <div className=''>
          <h1 className='text-[2em]  font-bold leading-9'>Rent Excellence. Drive Confidence</h1>
          <p className=' text-[0.7em]'>Rent the car you need, when you need it. Fast, simple, reliable</p>
          <button className=' bg-[#2d2dde] text-sm pb-1 px-3 rounded-xl mt-2 shadow-md' >Rent Now</button>
        </div>
        <div className='flex justify-end '>
          <Image
            src='/redcar.png'
            width={300}
            height={110}
            alt='car'
            className='h-auto w-auto'
          />
        </div>

      </div>
    </div>
 
  )
}

export default Banner