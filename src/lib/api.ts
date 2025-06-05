

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const BASE_SRAPI_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export const getProduct = async () => {
  const response = await fetch(
    `${BASE_SRAPI_URL}/api/cars?populate=thumbnail`
  );
  const data = await response.json();

  return data.data;
};

export const getProductDetails = async (slug: string) => {
  const response = await fetch(
    `${BASE_SRAPI_URL}/api/cars?populate=thumbnail&populate=images&filters[slug][$eq]=${slug}`
  );
  const data = await response.json();
  return data.data;
};


