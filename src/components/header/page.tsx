
'use client'
import { AlignJustify, Search, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


import React, { useState } from 'react'
import { VanishInput } from './VanishInput';
import { useAppDispatch } from '@/store/hooks';
import { setActive } from '@/store/slices/loginSlice';


interface HeaderList {
    name: string;
    url: string;
}

const Header = () => {
    const pathName = usePathname();
    const [togle, setToggle] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const handleLogin = () => {
        setToggle(false);
        dispatch(setActive())
    }

    const headerList: HeaderList[] = [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "RENT NOW",
            url: "/carRent"
        },
        {
            name: "SUBSCRIPTION",
            url: "/subscription"

        },
        {
            name: "CART",
            url: "/cart"
        },


    ]



    return (
        <div className='grid sm:grid-cols-2 p-3 gap-1 items-center bg-gradient-to-l from-[#1313f6] to-[#b1b1db]  header sticky top-0 z-10'>
            {/* mobile */}
            <div className='flex justify-between sm:justify-start items-center gap-4 relative  ' >
                <div>
                    <h1 className='text-blue-800 font-[800] text-[20px] text-nowrap'>CAR✓RENT</h1>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='flex border-1 p-1 rounded-2xl '>
                        <Search className='text-gray-600 ' />

                        <VanishInput />
                    </div>
                    <div className='sm:hidden items-center'>
                        <AlignJustify onClick={() => { setToggle(true) }} />
                    </div>
                </div>
                {togle && <div className="bg-blue-500 h-screen w-[65%] absolute right-0 top-0 text-white p-2 flex justify-between">
                    <ul className=' flex flex-col gap-3'>
                        {headerList.map((item, index) => {

                            return (
                                <li key={index} className='font-bold text-white text-[13px] z-50'>
                                    <Link href={item.url} className={`${pathName === item.url ? 'font-bold text-amber-500' : ''}`} onClick={() => { setToggle(false) }}>{item.name}</Link>
                                </li>
                            )
                        })}


                        <button

                            onClick={() => handleLogin()}
                            className='font-bold text-white bg-blue-400 px-2 rounded-md text-[13px] cursor-pointer py-1'>
                            LOGIN/SIGN UP
                        </button>
                    </ul>
                    <X onClick={() => { setToggle(false) }} />

                </div>
                }


            </div>
            {/* desktop */}
            <div className='hidden justify-end sm:flex '>
                <ul className='flex gap-4 items-center'>
                    {headerList.map((item, index) => {

                        return (
                            <li key={index} className='font-bold text-blue-400 text-[13px]'>
                                <Link href={item.url} className={`${pathName === item.url ? 'font-bold text-amber-500' : ''}`}>{item.name}</Link>
                            </li>
                        )
                    })}

                    <button
                        onClick={() => dispatch(setActive())}
                        className='font-bold text-white bg-blue-400 px-2 rounded-md text-[13px] cursor-pointer py-1'>
                        LOGIN/SIGN UP
                    </button>

                </ul>
            </div>

        </div>
    )
}

export default Header