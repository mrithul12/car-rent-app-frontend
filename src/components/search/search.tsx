"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import { ProductsType } from "../types/products";
import { ProductList } from "../productsComponent/ProductList";

interface SearchState {
  getItems: ProductsType[];
}

const Search = ({ getItems }: SearchState) => {
  const query = useAppSelector((state) => state.query.query);

  const searchQuery =
    query.length > 0
      ? getItems.filter((items) =>
          items.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];



  return (
    <div>
      {searchQuery.length > 0 && (
        <h2 className="px-20 font-medium text-[1.5em]">Searched Items...</h2>
      )}
      <ProductList getItems={searchQuery} />
    </div>
  );
};

export default Search;
