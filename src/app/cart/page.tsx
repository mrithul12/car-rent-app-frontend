export const dynamic = "force-dynamic";
import CartComponent from "@/components/cartComponent/CartComponent";
import { Car } from "@/components/types/products";
import { carFetch } from "@/lib/api";
import ProductData from "@/components/productsComponent/carProduct";
import CartProduct from "@/components/cartComponent/CartProduct";

const Cart = async () => {
  const carDatas: Car[] = await carFetch();

  return (
    <div>
      <CartComponent />
      <CartProduct />
      <ProductData carDatas={carDatas} />
    </div>
  );
};

export default Cart;
