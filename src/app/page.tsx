import AddContent from "@/components/advertaisement/AddContent";
import Add from "@/components/advertaisement/adds";
import ContactPage from "./contact/page";
import CarProduct from "./products/page";



export default function Home() {
  return <div>
    <Add/>
   
   <CarProduct/>
   <AddContent/>
   <ContactPage/>
  </div>;
}
