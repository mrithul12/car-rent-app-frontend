import { getProduct } from "@/lib/api";
import React from "react";
import { ProductsType } from "../types/products";
import { ProductList } from "./ProductList";
import Search from "../search/search";


const Products = async () => {
  const getItems: ProductsType[] = await getProduct();
  // const product = await getProduct()
  
  return (
    <div>
      <Search getItems={getItems}/>
      <ProductList getItems={getItems} />
    </div>
  );
};

export default Products;
