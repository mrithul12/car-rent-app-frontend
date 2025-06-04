"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { carFetch } from "@/store/slices/carDataslice";
import Image from "next/image";
import React, { useEffect } from "react";

const ProductData = () => {
  const carDatas = useAppSelector((state) => state.carData.carData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(carFetch());
  }, [dispatch]);

  return (
    <div className="mt-5 ">
      <h1 className="sm:px-20 px-2 font-fold sm:text-[1.5em] text-[1.2em]">
        The Mosted Searched Car
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 items-center gap-3 p-1 sm:px-20 mt-3">
        {carDatas.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-[10]  border-1 border-gray-200"
            >
              <Image
                src={item.image}
                alt={item.brand}
                width={250}
                height={210}
                className="w-full sm:h-[180px] cursor-pointer rounded-t-[10]"
              />

              <div className="flex justify-between mt-1 items-center px-3">
                <p className="text-black font-bold">
                  {item.brand.toLocaleUpperCase()}
                </p>
                <p className="font-medium text-[15px]">
                  {item.pricePerDay}/<span className="text-[10px]">Day</span>
                </p>
              </div>
              <div></div>

              <div className=" p-3  rounded-[10]">
                <button className="border-1 border-blue-700 cursor-pointer p-2 font-medium rounded-[10]  w-full ">
                  Reserve Vehicle
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductData;
