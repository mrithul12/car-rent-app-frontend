"use client";
import { AlignJustify, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";
import { VanishInput } from "./VanishInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActive } from "@/store/slices/loginSlice";

interface HeaderList {
  name: string;
  url: string;
}

const Header = () => {
  const pathName = usePathname();
  const [togle, setToggle] = useState<boolean>(false);
  const cartCount = useAppSelector((state) => state.cartItem.cart);
  const cartCountLength = cartCount.length;
 
  const dispatch = useAppDispatch();

   

  const handleLogin = () => {
    setToggle(false);
    dispatch(setActive());
  };


  const headerList: HeaderList[] = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "RENT NOW",
      url: "/products",
    },

    {
      name: "CART",
      url: "/cart",
    },
    {
      name: "ABOUT US",
      url: "/about",
    },
    {
      name: "CONTACT US",
      url: "/contact",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 p-2 gap-1 items-center  bg-black text-nowrap header sticky top-0 z-10 ">
      <div className="flex lg:justify-start sm:justify-between justify-between md:justify-between  items-center gap-4 relative  ">
        <div>
          <h1 className=" font-[800] text-[20px] text-[#fff] text-nowrap">CAR✓RENT</h1>
        </div>
        <div className="flex justify-end  gap-2 ">
          <div className="flex items-start border-1 p-2 rounded-2xl w-full bg-[#fff]">
            <Search className="text-black " />

            <VanishInput />
          </div>
          <div className="lg:hidden items-center flex text-white">
            <AlignJustify
              onClick={() => {
                setToggle(true);
              }}
            />
            {cartCountLength ? (
              <span className="bg-amber-500 rounded-[50%] text-amber-500 text-[5px] absolute top-[5] right-0  h-[8px]   w-[8px]"></span>
            ) : (
              ""
            )}
          </div>
        </div>
        {togle && (
          <div className="bg-black text-white h-screen w-[65%] absolute right-[-10] top-[-10] text-blck p-5 flex justify-between">
            <ul className=" flex flex-col gap-5">
              {headerList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="font-bold text-white  text-[13px] z-50 "
                  >
                    <Link
                      href={item.url}
                      className={`${
                        pathName === item.url
                          ? "font-bold text-amber-500 relative flex"
                          : "relative flex"
                      }`}
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      {" "}
                      <p> {item.name}</p>{" "}
                      {item.name === "CART" && cartCountLength > 0 && (
                        <span className="bg-amber-500 rounded-[50%] text-amber-500 text-[5px] absolute right-[50px] h-[8px]   w-[8px]">
                          {cartCountLength}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}

              <button
                onClick={() => handleLogin()}
                className="font-bold  border-1 px-2 hover:bg-amber-500 hover:text-[#fff]  text-[13px] cursor-pointer py-1"
              >
                LOGIN
              </button>
            </ul>
            <X
              onClick={() => {
                setToggle(false);
              }}
            />
          </div>
        )}
      </div>

      <div className="hidden justify-end lg:flex ">
        <ul className="flex gap-4 items-center">
          {headerList.map((item, index) => {
            return (
              <li key={index} className="font-bold  text-[13px]">
                <Link
                  href={item.url}
                  className={`${
                    pathName === item.url
                      ? "font-bold text-amber-500 relative underline flex justify-between"
                      : "relative hover:underline hover:text-amber-500  flex justify-between"
                  }`}
                >
                  {" "}
                  <p className="text-white">{item.name}</p>{" "}
                  {item.name === "CART" && cartCountLength > 0 && (
                    <span className="bg-amber-500 rounded-[50%] text-amber-500 text-[5px] absolute right-[-10] h-[8px]   w-[8px]">
                      {cartCountLength}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}

          <button
            onClick={() => dispatch(setActive())}
            className="font-bold border-1 px-2 hover:bg-amber-500 hover:text-[#fff] rounded-[10] text-white   text-[13px] cursor-pointer py-1"
          >
            LOGIN
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
