import { Car } from "@/components/types/products";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const getProduct = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars?populate=thumbnail`
  );
  const data = await response.json();
  return data.data;
};

export const getProductDetails = async (slug: string) => {
  const response = await fetch(
    `https://car-rent-backend-anii.onrender.com/api/cars?populate=thumbnail&populate=images&filters[slug][$eq]=${slug}`
  );
  const data = await response.json();
  return data.data;
};




export const carFetch = async (): Promise<Car[]> => {
  const response = await fetch(`${BASE_URL}/api/cars`);
  const data = await response.json();
  return data.data;
};
