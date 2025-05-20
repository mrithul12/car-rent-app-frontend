'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'



const Banner = () => {

  const route = useRouter();

  return (
    <AnimatePresence>
      <div className='grid  sm:grid-cols-2 p-4  gap-2 text-[#fff]'>
        <div className='bg-blue-700 rounded-[5] p-1 flex flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <motion.h1
              key={1}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='text-[2em] font-bold leading-9'>Elite Wheels for Every Destination</motion.h1>
            <motion.p
              key={2}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className=' text-[0.7em]'>Your perfect ride is just a click away. Rent now, drive easy</motion.p>
            <motion.button
              key={8}
              initial={{ x: 0, opacity: 1, scale: 0.1 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => route.push('/carRent')} className='block sm:hidden bg-[#fff] text-sm  rounded-xl mt-3 p-1 font-bold w-[100px] text-black ' >Rent Now</motion.button>

          </div>
          <div className='flex sm:justify-between justify-center mt-3 items-center overflow-hidden'>
            <motion.button
              key={8}
              initial={{ x: 0, opacity: 1, scale: 0.1 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => route.push('/carRent')} className='hidden sm:block w-[120px] h-[35px]  bg-[#fff] text-sm   rounded-xl  shadow-md text-blue-700 ' >Rent Now</motion.button>
            <motion.div
              key={3}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}>
              <Image
                src='/blackcar.png'
                width={300}
                height={110}
                alt='car'
                className='h-auto w-auto'
              />
            </motion.div>
          </div>
        </div>
        <div className='hidden sm:flex bg-blue-700 rounded-[5] p-1  flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <motion.h1
              key={4}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='text-[2em]  font-bold leading-9'>Rent Excellence. Drive Confidence</motion.h1>
            <motion.p
              key={5}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}


              className=' text-[0.7em]'>Rent the car you need, when you need it. Fast, simple, reliable</motion.p>
            <motion.button
              key={8}
              initial={{ x: 0, opacity: 1, scale: 0.1 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => route.push('/carRent')} className='block sm:hidden bg-[#fff] text-sm  rounded-xl font-bold shadow-md text-blue-700' >Rent Now</motion.button>
          </div>
          <div className='flex justify-between mt-3 items-center'>
            <motion.button
              key={7}

              initial={{ x: 0, opacity: 1, scale: 0.1 }}

              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => route.push('/carRent')} className='hidden sm:block w-[120px] h-[35px]  bg-[#fff] text-sm   rounded-xl  shadow-md text-blue-700' >Rent Now</motion.button>
            <motion.div
              key={6}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}>

              <Image
                src='/redcar.png'
                width={300}
                height={110}
                alt='car'
                className='h-auto w-auto'
              />
            </motion.div>

          </div>

        </div>
      </div>
    </AnimatePresence>

  )
}

export default Banner