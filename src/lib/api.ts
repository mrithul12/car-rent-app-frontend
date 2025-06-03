
// import { Car } from "@/components/types/products";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
// const base_fetch_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";


// export const getProduct = async () => {
//   const response = await fetch(
//     `${base_fetch_url}/api/cars?populate=thumbnail`
//   );
//   const data = await response.json();
//   return data.data;
// };

// export const getProductDetails = async (slug: string) => {
//   const response = await fetch(
//     `${base_fetch_url}/api/cars?populate=thumbnail&populate=images&filters[slug][$eq]=${slug}`
//   );
//   const data = await response.json();
//   return data.data;
// };

// export const carFetch = async (): Promise<Car[]> => {
//   const response = await fetch(`${BASE_URL}/api/cars`);
//   const data = await response.json();
//   return data.data;
// };

import { Car } from "@/components/types/products";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const base_fetch_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getProduct = async () => {
  try {
    const response = await fetch(`${base_fetch_url}/api/cars?populate=thumbnail`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("Error in getProduct:", err);
    return []; // fallback to empty list
  }
};

export const getProductDetails = async (slug: string) => {
  try {
    const response = await fetch(
      `${base_fetch_url}/api/cars?populate=thumbnail&populate=images&filters[slug][$eq]=${slug}`
    );
    if (!response.ok) throw new Error("Failed to fetch product details");
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("Error in getProductDetails:", err);
    return null; // or [] based on your component's expected return
  }
};

export const carFetch = async (): Promise<Car[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/cars`);
    if (!response.ok) throw new Error("Failed to fetch cars");
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("Error in carFetch:", err);
    return [];
  }
};

