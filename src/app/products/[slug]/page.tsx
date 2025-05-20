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

    const productSlug:ProductsType[] = await getProductDetails(slug)
  return (
    <div>Details page - {productSlug.map((item)=>{
      return(
        <div key={item.id}>
          {item.title}
          <div>
              {item.images.map((img) => (
                <Image
                  key={img.id}
                  src={img.url}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              ))}
            </div>
        </div>
      )
    })}</div>

  )
}
