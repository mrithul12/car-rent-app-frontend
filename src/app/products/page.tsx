export const dynamic = "force-dynamic";
import ProductData from "@/components/productsComponent/carProduct";
import { Car } from "@/components/types/products";
import { carFetch } from "@/lib/api";



const CarProduct = async () => {
  const carDatas: Car[] = await carFetch();

  return (
    <div>
      <ProductData carDatas={carDatas} />
    </div>
  );
};

export default CarProduct;
