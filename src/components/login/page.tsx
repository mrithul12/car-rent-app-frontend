"use client"
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setInActive } from '@/store/slices/loginSlice'
import { X } from 'lucide-react'
import React from 'react'

const LoginPage = () => {
  const isActive = useAppSelector((state) => state.login.isActive)
  const dispatch = useAppDispatch()

  return (
    <>
      {isActive && (
        <div className="fixed inset-0 flex items-center justify-center bg-red bg-opacity-50 z-50">
          <div className="w-[90%] h-[50vh] sm:w-[400px] bg-gradient-to-br from-blue-800 to-blue-400 text-white p-6 rounded-2xl shadow-lg relative space-y-5">
            
      
            <button
              className="absolute top-2 right-6 text-white hover:text-gray-200"
              onClick={() => dispatch(setInActive())}
            >
              <X />
            </button>

      
            <div className='mt-5'>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-1 rounded-md text-white text-center outline-none border-[1]"
              />
            </div>

      
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-1 rounded-md text-white text-center outline-none border-[1]"
              />
            </div>

    
            <div className="flex justify-center">
              <button className="sm:w-[150PX] w-full  bg-white text-blue-800 px-6 py-2 rounded-md font-semibold hover:bg-blue-100 transition duration-200">
                Login
              </button>
            </div>
            <div className='flex justify-center'>
              <p>Don&apos;t have an account? <span className='text-red-700 underline'>Register Now</span></p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginPage
