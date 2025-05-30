"use client";
import Image from "next/image";
import React from "react";
import { ProductsType } from "../types/products";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
// import { Fuel, Settings, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface  ProductListType {
  getItems: ProductsType[];

}

export const ProductList = ({ getItems }: ProductListType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={1}
          initial={{ y: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 bg-[#fff]   lg:grid-cols-4 items-center gap-3 p-1 sm:px-20"
        >
          {getItems.map((item, index) => {
            return (
              <div
                key={index}
                className=" rounded-[10]  border-1 border-gray-200"
              >
                <Image
                  src={item.thumbnail.url}
                  alt={item.title}
                  width={250}
                  height={210}
                  className="w-full h-auto cursor-pointer rounded-t-[10]"
                  onClick={() => router.push(`/products/${item.slug}`)}
                />

                <div className="flex justify-between mt-1 items-center px-3">
                  <p className="text-black font-bold">
                    {item.title.toLocaleUpperCase()}
                  </p>
                  <p className="font-medium text-[15px]">
                    {item.price}/<span className="text-[10px]">Day</span>
                  </p>
                </div>
                <div></div>
{/* 
                <div className="flex justify-between  items-center font-semibold  px-3">
                  <span className="flex items-center">
                    <Fuel className=" text-gray-400 w-[15px]" />
                    <p className="text-[12px]"> {item.milage}</p>
                  </span>
                  <div className="flex items-center ">
                    <Settings className=" text-gray-400 w-[15px]" />
                    <p className="text-[12px]">{item.transmission}</p>{" "}
                  </div>
                  <span className="flex items-center ">
                    <User className=" text-gray-400 w-[15px]" />
                    <p className="text-[12px]"> {item.capacity}</p>
                  </span>
                </div> */}
                <div className=" p-3  rounded-[10]">
                  <button
                    className="border-1 border-blue-700 cursor-pointer p-2 font-medium rounded-[10]  w-full "
                    onClick={() =>
                      dispatch(addToCart({ ...item, quantity: 1 }))
                    }
                  >
                    Reserve Vehicle
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
