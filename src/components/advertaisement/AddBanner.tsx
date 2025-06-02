import Image from 'next/image'
import React from 'react'

const AddBanner = () => {
  return (
    <div >
        <Image src={'/images/advertaisment-image-3.jpg'} alt='adds-images' width={1000} height={1000}
        className='w-[100vw] h-[100vh] object-contain'/>
    </div>
  )
}

export default AddBanner