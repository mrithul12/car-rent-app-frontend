

import { ProductList } from "@/components/productsComponent/ProductList";
import Search from "@/components/search/search";
import {  getProduct } from "@/lib/api";
import { ProductsType } from "@/components/types/products";
import ProductData from "@/components/productsComponent/carProduct";

export default async function ProductPage() {
  const [getItems]: [ProductsType[]] = await Promise.all([
    getProduct()
    
  ]);

  return (
    <div>
      <h1 className="sm:px-20 font-bold sm:text-[2em] text-[1.5em] px-3">
        Cars for Rent
      </h1>
      <Search getItems={getItems} />
      <ProductList getItems={getItems} />
      <ProductData/>
      
    </div>
  );
}
