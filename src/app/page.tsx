import AddContent from "@/components/advertaisement/AddContent";
import Add from "@/components/advertaisement/adds";
import ContactPage from "./contact/page";
import CarProduct from "./products-list/page";
import { ProductsType } from "@/components/types/products";
import { getProduct } from "@/lib/api";
import { ProductList } from "@/components/productsComponent/ProductList";


export default async function Home() {
  const getItems: ProductsType[] = await getProduct();

  return <div>
    <Add />
    <ProductList getItems={getItems} />

    <CarProduct />
    <AddContent />
    <ContactPage />
  </div>;
}
