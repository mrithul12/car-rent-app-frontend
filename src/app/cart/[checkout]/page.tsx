"use client";

import Data from "@/components/hardcodeData/data";
import { FormData } from "@/components/types/costomerDetails";
import { useAppSelector } from "@/store/hooks";


import Image from "next/image";

import { useParams } from "next/navigation";

import React, { useState } from "react";

const CheckoutPage = () => {
    const param = useParams();
    const { checkout } = param;

    const products = useAppSelector((state) => state.product.product);

    const updateItems = products.find((item) => item.id === Number(checkout));
    console.log("updated product is", updateItems);

    const [formData, setFormData] = useState<FormData>({
        fname: "",
        email: "",
        number: "",
        address: "",
        pickupLocation: "",
        dropdownLocation: "",
        date: null,
        time: "",
        file: null,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("details", formData);
    };

    return (
        <div className=" grid sm:flex bg-gray-300 p-4 gap-5    m-auto font-sans">
            <div className="w-[100%]  rounded-[5] ">
                <div className="w-full grid grid-cols-1">
                    {updateItems?.thumbnail?.url && (
                        <Image
                            src={updateItems.thumbnail.url}
                            alt={updateItems?.title}
                            width={650}
                            height={660}
                            className="w-auto h-auto rounded-[10]"
                        />
                    )}
                </div>
                <div className="grid grid-cols-3  gap-1  p-5">
                    {updateItems?.images.map((img, i) => (
                        <Image
                            key={i}
                            src={img.url}
                            alt={img.url}
                            width={300}
                            height={10}
                            className="rounded-[10] w-[100px] sm:w-[300px] h-[80px] sm:h-[150px]"
                        />
                    ))}
                </div>
                <div className="bg-[#fff] mt-2 rounded-[10] p-5">
                    <h1 className="text-[2.5em] font-medium">{updateItems?.title}</h1>
                    <p className="text-[#f3aa0c] font-bold text-[1.5em] flex ">
                        ★ ★ ★ ★ ☆
                    </p>
                    <p className="text-[15px]">
                        Your journey begins with a tap. Whether it’s a weekend escape or a
                        daily ride, our sleek, hassle-free rental service puts the perfect
                        car at your fingertips. No paperwork. No waiting. Just drive.
                    </p>
                    <div className="flex justify-between">
                        <div className="flex flex-col items-center">
                            <p className="font-bold">Milage</p>
                            <p>{updateItems?.milage}/Ltr</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold">Transmission</p>
                            <p>{updateItems?.transmission}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold">Capacity</p>
                            <p>{updateItems?.capacity} person</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-3">
                        <p className="font-[500]"><span className="text-[2em] font-[700]"> {updateItems?.price}</span>/Day</p>
                    </div>
                </div>

                <div className="bg-[#fff] mt-5 p-5 rounded-[10]">
                    {Data.map((i) => {
                        return (
                            <div key={i.name}>
                                <div className="flex w-full items-center justify-between mt-2">
                                    <div className="flex items-center gap-2 ">
                                        <Image
                                            src={i.image}
                                            alt={i.title}
                                            width={40}
                                            height={40}
                                            className="rounded-[50%]" />
                                        <p className="font-bold">{i.name}</p>
                                    </div>
                                    <div className="flex flex-col items-end">

                                        <p className="font-bold">{i.date}</p>
                                        <p className="text-[#f3aa0c] font-bold text-[1em] flex "> ★ ★ ★ ★ ☆</p>

                                    </div>

                                </div>

                                <p className="mt-2 font-bold">{i.title}</p>
                                <p className="mt-5">{i.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-[100%] sm:w-[60%] sm:h-full bg-gray-300 rounded-[5]   text-start   gap-1  text-nowrap">
              

                <form onSubmit={handleSubmit} className="grid gap-5">
                   
                 
                   
      
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-1 p-5 bg-[#fff] rounded-[10]">
                          
                        <div className="grid  gap-1  ">
                            
                            <label className="text-[12px] font-bold">Name</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                name="fname"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-1 ">
                            <label className="text-[12px] font-bold">Address</label>
                            <input
                                type="text"
                                placeholder="Enter Address"
                                className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                name="lname"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid ">
                            <label className="text-[12px] font-bold">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Mail"
                                className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid ">
                            <label className="text-[12px] font-bold">Mobile</label>
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                name="number"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid">
                            <label className="text-[12px] font-bold">Upload Licence</label>
                            <input
                                type="file"
                                className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                name="file"
                            />
                        </div>
                    </div>
                    <div className="bg-[#fff] p-5 rounded-[10] ">
                        <div>
                          
                            <div className="flex items-center gap-1 mt-1">
                                <div className="w-3 h-3 rounded-full bg-green-500 "></div>
                                <span className="text-[12px] font-bold">Pick-Up</span>
                            </div>
                        </div>
                        <div className=" grid grid-cols-1 sm:grid-cols-1 gap-1 mt-2">
                            <div className="grid">
                                <label className="text-[12px] font-bold">City/Town name</label>
                                <input
                                    type="text"
                                    className="bg-gray-300 p-2 rounded-[5] outline-0  placeholder:text-xs"
                                    placeholder="Enter PickUp Location"
                                />
                            </div>
                            <div className="grid">
                                <label className="text-[12px] font-bold">Land Mark</label>
                                <input
                                    type="text"
                                    placeholder="Enter Land Mark"
                                    className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                />
                            </div>
                            <div className="grid">
                                <label className="text-[12px] font-bold">Date</label>
                                <input
                                    type="date"
                                  
                                    className="bg-gray-300 p-2 rounded-[5] outline-0 "
                                />
                            </div>
                            <div className="grid">
                                <label className="text-[12px] font-bold">Time</label>
                                <input
                                    type="time"
                                    className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs "
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#fff] p-5 rounded-[10]">
                        <div>
                           
                            <div className="flex items-center gap-1 mt-1">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-[12px] font-bold">Drop-up</span>
                            </div>
                        </div>
                        <div className=" grid grid-cols-1 sm:grid-cols- gap-1 mt-2">
                            <div className="grid">
                                <label className="text-[12px] font-bold">City/Town name</label>
                                <input
                                    type="text"
                                    className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                    placeholder="Enter PickUp Location"
                                />
                            </div>
                            <div className="grid">
                                <label className="text-[12px] font-bold">Land Mark</label>
                                <input
                                    type="text"
                                    placeholder="Enter Land Mark"
                                    className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                />
                            </div>
                            <div className="grid">
                                <label className="text-[12px] font-bold">Date</label>
                                <input
                                    type="date"
                                    className="bg-gray-300 p-2 rounded-[5] outline-0 "
                                />
                            </div>
                            <div className="grid">
                                <label className="text-[12px] font-bold">Time</label>
                                <input
                                    type="time"
                                    className="bg-gray-300 p-2 rounded-[5] outline-0 placeholder:text-xs"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <button
                            type="submit"
                            className="bg-blue-900 text-[#ffff] p-2 w-full  rounded-[5]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
