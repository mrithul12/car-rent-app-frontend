


import AddContent from "@/components/advertaisement/AddContent";
import Add from "@/components/advertaisement/adds";
import Products from "@/components/products/Products";
import ContactPage from "./contact/page";
import CarProduct from "./products/page";


export default function Home() {
  return <div>
    <Add/>
    <Products/>
   <CarProduct/>
   <AddContent/>
   <ContactPage/>
  </div>;
}
