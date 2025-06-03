"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import React, { useEffect } from "react";
import { ProductList } from "../productsComponent/ProductList";

const CartProduct = () => {
  const products = useAppSelector((state) => state.product.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="w-full ">
        <ProductList getItems={products} />
      </div>
    </div>
  );
};

export default CartProduct;
