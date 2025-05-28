
import Data from '@/components/hardcodeData/data';
import { ProductsType } from '@/components/types/products';
import { getProductDetails } from '@/lib/api';
import Image from 'next/image';
import React from 'react'


interface pageParams{
    params:Promise<{
        slug:string;
    }>
}
export default async function ProductDetails({params}:pageParams) {
    const {slug} = await params;
    console.log("details",slug);
    

    const item:ProductsType[] = await getProductDetails(slug)
  return (
    <div className='w-[100%]'>
       {item.map((item)=>{
      return(
      <div className=" rounded-[5] " key={item.id}>
                <div className="w-full grid grid-cols-1">
                    {item?.thumbnail?.url && (
                        <Image
                            src={item.thumbnail.url}
                            alt={item?.title}
                            width={650}
                            height={660}
                            className="w-[100%] h-auto rounded-[10]"
                        />
                    )}
                </div>
                <div className="grid grid-cols-3  gap-1 place-items-center  p-5">
                    {item?.images.map((img, i) => (
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
                    <h1 className="text-[2.5em] font-medium">{item?.title}</h1>
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
                            <p>{item?.milage}/Ltr</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold">Transmission</p>
                            <p>{item?.transmission}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold">Capacity</p>
                            <p>{item?.capacity} person</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-3">
                        <p className="font-[500]"><span className="text-[2em] font-[700]"> {item?.price}</span>/Day</p>
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
      )
    })}</div>

  )
}
