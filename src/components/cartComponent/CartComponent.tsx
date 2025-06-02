"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeCart } from "@/store/slices/cartSlice";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import CartEmptyDisplay from "./CartEmptyDisplay";

const CartComponent = () => {
  const cartItems = useAppSelector((state) => state.cartItem.cart);
  const dispatch = useAppDispatch();
  const route = useRouter();
  return (
    <div>
      <div className="">
        {cartItems.length < 1 && <CartEmptyDisplay />}
        {cartItems.length > 0 && (
          <h1 className="sm:px-20 px-2 mt-1 font-medium sm:text-[2em] text-[1.5em]">
            Cart Items
          </h1>
        )}
        <div
          className={
            cartItems.length > 1
              ? "grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 text-nowrap sm:px-20 "
              : "grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 text-nowrap sm:px-20 "
          }
        >
          {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="overflow-hidden bg-[#fff]   border-1 border-gray-200 m-1 rounded-[10] relative"
              >
                <Image
                  src={item.thumbnail.url}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-[300px] mt-5 "
                />

                <div className="flex justify-between mt-1.5 items-center px-2">
                  <p className="text-blue-900 font-bold">
                    {item.title.toLocaleUpperCase()}
                  </p>
                  <p className="font-bold text-[12px]">${item.price}/Day</p>
                </div>

                <div className=" flex justify-center p-3">
                  <button
                    onClick={() => route.push(`/cart/${item.id}`)}
                    className="p-2 rounded-[10] border-blue-700 w-full cursor-pointer border-1  font-medium"
                  >
                    Check Out
                  </button>
                </div>
                <div className="absolute top-2 right-2 text-gray-400 font-light cursor-pointer">
                  <CircleX
                    onClick={() => dispatch(removeCart(item))}
                    className="font-light"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h1 className="sm:px-20 px-2 font-medium sm:text-[2em] text-[1.5em]">
            All Items...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
