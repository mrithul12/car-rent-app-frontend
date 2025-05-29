

import React from 'react'
import { Car } from '../types/products';
import { carFetch } from '@/lib/api';

const CarProduct =async () => {
      const carDatas:Car[] = await carFetch()
  console.log("cars",carDatas);
  

  return (
    <div>CarProduct</div>
  )
}

export default CarProduct