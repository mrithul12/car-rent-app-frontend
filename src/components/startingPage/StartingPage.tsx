'use client'
import React from 'react'
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Home, Phone, MapPin, Car, Plane } from 'lucide-react';


const StartingPage = () => {

     const [sameLocation, setSameLocation] = useState(true);
  return (
    <div
     style={{ backgroundImage: "url('/bg-images.jpg')" }}
      className="min-h-screen bg-cover bg-center    flex items-center justify-end p-2 sm:px-20">

        <div className="bg-white rounded-2xl shadow-lg  w-[500px] h-fit p-5 ">
      <div className="bg-yellow-400 text-black font-bold text-lg p-2  rounded-t-md mb-4">
        LETS FIND YOUR PERFECT CAR
      </div>

      <div className="flex gap-2 mb-4">
        <button className="bg-yellow-400 flex-1 p-2 rounded text-[10px] font-semibold sm:text-nowrap flex text-start items-center gap-1">
          <Home size={16} /> HOME DELIVERY
        </button>
        <button className="border flex-1 p-2 rounded text-[10px] font-semibold sm:text-nowrap flex text-start items-center gap-1">
          <Plane size={16} /> AIRPORT DELIVERY
        </button>
        <button className="border flex-1 p-2 rounded text-[10px] font-semibold flex text-start items-center gap-1">
          <Car size={16} /> PICKUP FROM 
        </button>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Switch
          checked={sameLocation}
          onChange={setSameLocation}
          className={`${sameLocation ? 'bg-yellow-400' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Drop off toggle</span>
          <span
            className={`${sameLocation ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <span className="text-[10px] font-semibold">Drop Off at same location</span>
      </div>

      <label className="text-[10px] font-bold">
        PICK-UP LOCATION <span className="text-green-600 font-semibold">From 9 AM to 6 PM</span>
      </label>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Pick up location"
          className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"
        />
        <MapPin size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-[10px] font-bold block mb-1">PICK-UP DATE</label>
          <input
            type="datetime-local"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold block mb-1">DROP-OFF DATE</label>
          <input
            type="datetime-local"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      <div className="text-sm flex flex-col sm:flex-row sm:justify-between gap-2 mb-4 text-gray-700">
        <div className="flex items-center gap-1">
          <Phone size={14} /> 24/7 Phone Support
        </div>
        <div className="flex items-center gap-1">
          <Car size={14} /> Choose KM Package
        </div>
      </div>

      <button className="w-full bg-yellow-400 font-semibold p-3 rounded hover:bg-yellow-500">
        Submit
      </button>
    </div>
        
    </div>
  )
}

export default StartingPage