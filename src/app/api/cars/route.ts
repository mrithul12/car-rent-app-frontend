import { Car } from "@/components/types/products";
import { NextResponse } from "next/server";

const carData: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    type: "sedan",
    pricePerDay: 50,
    fuelType: "Petrol",
    seats: 5,
    transmission: "Automatic",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748530148/camy_ajo4jk.webp",
  
    
  }
  ,
  {
    id: 2,
    brand: "Honda",
    model: "CR-V",
    year: 2021,
    type: "suv",
    pricePerDay: 60,
    fuelType: "Petrol",
    seats: 5,
    transmission: "Automatic",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748530147/crv_swu8zc.webp"

  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2023,
    type: "luxury",
    pricePerDay: 150,
    fuelType: "Petrol",
    seats: 5,
    transmission: "Automatic",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748530147/benz_tjtumd.webp"

   },
  {
    id: 4,
    brand: "Jeep",
    model: "Wrangler",
    year: 2022,
    type: "suv",
    pricePerDay: 90,
    fuelType: "Diesel",
    seats: 5,
    transmission: "Manual",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748530147/jeep_vdpwku.webp"
  
  },
  {
    id: 5,
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    type: "luxury",
    pricePerDay: 130,
    fuelType: "Electric",
    seats: 5,
    transmission: "Automatic",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748530146/tesla_t5spdx.avif"
  
  },
  {
    id: 6,
    brand: "Hyundai",
    model: "Elantra",
    year: 2020,
    type: "sedan",
    pricePerDay: 40,
    fuelType: "Petrol",
    seats: 5,
    transmission: "Manual",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748530146/elantra_etw5oe.avif"
   
  },
  {
    id: 7,
    brand: "BMW",
    model: "X5",
    year: 2022,
    type: "luxury",
    pricePerDay: 140,
    fuelType: "Diesel",
    seats: 5,
    transmission: "Automatic",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748530146/bmw_q087d4.webp"
  
  },
  {
    id: 8,
    brand: "Ford",
    model: "Explorer",
    year: 2021,
    type: "suv",
    pricePerDay: 70,
    fuelType: "Petrol",
    seats: 7,
    transmission: "Automatic",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748529949/explorer_fzqpt1.avif"
  
  },
  {
    id: 9,
    brand: "Audi",
    model: "A4",
    year: 2023,
    type: "sedan",
    pricePerDay: 95,
    fuelType: "Petrol",
    seats: 5,
    transmission: "Automatic",
    image:"https://res.cloudinary.com/dr7bozhoi/image/upload/v1748529949/a4_audi_ih4zgv.webp"

  },
  // {
  //   id: 10,
  //   brand: "Kia",
  //   model: "Sportage",
  //   year: 2022,
  //   type: "suv",
  //   pricePerDay: 55,
  //   fuelType: "Petrol",
  //   seats: 5,
  //   transmission: "Manual",
  
  // },
  // {
  //   id: 11,
  //   brand: "Nissan",
  //   model: "Altima",
  //   year: 2021,
  //   type: "sedan",
  //   pricePerDay: 45,
  //   fuelType: "Petrol",
  //   seats: 5,
  //   transmission: "Automatic",
  
  // },
  // {
  //   id: 12,
  //   brand: "Chevrolet",
  //   model: "Tahoe",
  //   year: 2022,
  //   type: "suv",
  //   pricePerDay: 100,
  //   fuelType: "Petrol",
  //   seats: 7,
  //   transmission: "Automatic",
  
  // },
  // {
  //   id: 13,
  //   brand: "Lexus",
  //   model: "ES",
  //   year: 2023,
  //   type: "luxury",
  //   pricePerDay: 125,
  //   fuelType: "Hybrid",
  //   seats: 5,
  //   transmission: "Automatic",
    
  // },
  // {
  //   id: 14,
  //   brand: "Volkswagen",
  //   model: "Passat",
  //   year: 2020,
  //   type: "sedan",
  //   pricePerDay: 42,
  //   fuelType: "Diesel",
  //   seats: 5,
  //   transmission: "Manual",

  // },
  // {
  //   id: 15,
  //   brand: "Mazda",
  //   model: "CX-5",
  //   year: 2021,
  //   type: "suv",
  //   pricePerDay: 65,
  //   fuelType: "Petrol",
  //   seats: 5,
  //   transmission: "Automatic",

  // },
  // {
  //   id: 16,
  //   brand: "Jaguar",
  //   model: "XF",
  //   year: 2022,
  //   type: "luxury",
  //   pricePerDay: 145,
  //   fuelType: "Petrol",
  //   seats: 5,
  //   transmission: "Automatic",
  // },
  // {
  //   id: 17,
  //   brand: "Subaru",
  //   model: "Outback",
  //   year: 2023,
  //   type: "suv",
  //   pricePerDay: 75,
  //   fuelType: "Petrol",
  //   seats: 5,
  //   transmission: "CVT",
  //   image:
  // },
  // {
  //   id: 18,
  //   brand: "Porsche",
  //   model: "Panamera",
  //   year: 2023,
  //   type: "luxury",
  //   pricePerDay: 180,
  //   fuelType: "Petrol",
  //   seats: 4,
  //   transmission: "Automatic",
  // },
  // {
  //   id: 19,
  //   brand: "Renault",
  //   model: "Duster",
  //   year: 2021,
  //   type: "suv",
  //   pricePerDay: 58,
  //   fuelType: "Diesel",
  //   seats: 5,
  //   transmission: "Manual",
  // },
  // {
  //   id: 20,
  //   brand: "Skoda",
  //   model: "Superb",
  //   year: 2022,
  //   type: "sedan",
  //   pricePerDay: 68,
  //   fuelType: "Petrol",
  //   seats: 5,
  //   transmission: "Automatic",
  // },
];


export async function GET() {
  return NextResponse.json({data:carData});
}