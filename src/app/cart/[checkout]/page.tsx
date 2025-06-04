"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import { ChevronRight, Percent } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const CheckoutPage = () => {
  const param = useParams();
  const { checkout } = param;

  const products = useAppSelector((state) => state.product.product);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const updateItems = products.find((item) => item.id === Number(checkout));

  const updateFee = (updateItems?.price ?? 0) + 299;

  return (
    <div className=" grid sm:flex  p-4 gap-5 sm:px-20    m-auto font-sans">
      <div className="sm:w-[70%]  rounded-[5] ">
        <div className="sm:flex  w-full ">
          <div className="w-full flex ">
            {updateItems?.thumbnail?.url && (
              <Image
                src={updateItems.thumbnail.url}
                alt={updateItems?.title}
                width={650}
                height={660}
                className="w-auto h-full rounded-[10] object-contain"
              />
            )}
          </div>
          <div className="flex sm:flex-col justify-center  gap-1 p-2">
            {updateItems?.images.map((img, i) => (
              <Image
                key={i}
                src={img.url}
                alt={img.url}
                width={300}
                height={300}
                className="rounded-[10] sm:w-[250px] w-[120px]  object-contain"
              />
            ))}
          </div>
        </div>
        <hr className="mt-5 text-gray-300" />

        <div className="bg-[#fff] mt-5 rounded-[10] ">
          <div className="flex justify-between items-center ">
            <div className=" gap-3 text-gray-500">
              <h1 className="text-[1.2em] font-bold text-black">
                {updateItems?.title.toLocaleUpperCase()}
              </h1>

              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <p>{updateItems?.transmission}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p>petrol</p>
                </div>

                <div className="flex flex-col items-center">
                  <p>{updateItems?.capacity} seat</p>
                </div>
              </div>
            </div>

            <div className="grid place-items-center  border-1 rounded-[10] border-gray-200">
              <div className="bg-green-700 w-full px-5 rounded-t-[10]">
                <p className="p-1">4 star</p>
              </div>
              <div className="bg-[#fff] text-black px-5 rounded-b-[10]">
                <p className="p-1">Reviews(10)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" sm:w-[30%] sm:h-full  rounded-[5]   ">
        <div className="grid grid-cols-1 w-full h-full gap-5  bg-gray-100 rounded-[10] p-5">
          <div>
            <h1 className="font-bold">Exclusive Offers</h1>
          </div>
          <div className="flex justify-between items-center border-1 rounded-[10]">
            <div className="flex items-center  p-2 gap-2">
              <div className="bg-blue-600 rounded-[50] p-1">
                <Percent className="text-[#fff] " />
              </div>
              <div className="font-medium">
                <p>Explore offer</p>
                <p className="cursor-pointer text-[12px]">
                  Check availability Here
                </p>
              </div>
            </div>

            <div className="flex items-end">
              <ChevronRight className="text-[10px] cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[12px]">Rent/Day</h1>
            <p className="font-bold">${updateItems?.price}</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[12px]">Trip potetion fee</h1>
            <p className="font-bold">$299</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[12px]">Total price</h1>
            <h1 className="font-bold">${updateFee}</h1>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-blue-600 w-full p-2 rounded-[15] text-[#fff] cursor-pointer">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
