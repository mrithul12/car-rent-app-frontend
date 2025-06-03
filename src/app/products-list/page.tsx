'use client'

import ProductData from "@/components/productsComponent/carProduct";
import { Car } from "@/components/types/products";
import { carFetch } from "@/lib/api";
import { useState } from "react";



const CarProduct = () => {

  const [data, setData] = useState<Car[]>([]);

  const fetchData = async () => {
    const carDatas: Car[] = await carFetch();
    console.log('###########carDatas', carDatas)
    setData(carDatas)
  }

  fetchData()

  console.log('#########3', data)

  return (
    <div>
      <ProductData carDatas={data} />
    </div>
  );
};

export default CarProduct;
