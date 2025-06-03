import { ProductList } from "@/components/products/ProductList";
import Search from "@/components/search/search";
import { ProductsType } from "@/components/types/products";
import { getProduct } from "@/lib/api";
import React from "react";

const Product = async () => {
  const getItems: ProductsType[] = await getProduct();

  return (
    <div>
      <h1 className="sm:px-20 font-bold sm:text-[2em] text-[1.5em] px-3">
        Cars for Rent
      </h1>
      <Search getItems={getItems} />
      <ProductList getItems={getItems} />
    </div>
  );
};

export default Product;
