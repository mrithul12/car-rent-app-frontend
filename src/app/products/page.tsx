
// import AddBanner from "@/components/advertaisement/AddBanner";
import ProductData from "@/components/products/carProduct";
import { ProductList } from "@/components/products/ProductList";

import { Car, ProductsType } from "@/components/types/products";
import { carFetch, getProduct } from "@/lib/api";

const CarProduct = async () => {
  const carDatas: Car[] = await carFetch();
   const getItems: ProductsType[] = await getProduct();
  return (
    <div>
      <ProductList getItems={getItems}/>
      <ProductData carDatas={carDatas} />
      
    </div>
  );
};

export default CarProduct;
