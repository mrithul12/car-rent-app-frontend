export const getProduct = async ()=>{
   
   const response = await fetch('https://car-rent-backend-anii.onrender.com/api/cars?populate=thumbnail');
   const data =await response.json();
   return data.data;
}


export const getProductDetails = async (slug:string) =>{
   const response = await fetch(`https://car-rent-backend-anii.onrender.com/api/cars?populate=thumbnail&populate=images&filters[slug][$eq]=${slug}`);
   const data = await response.json();
   return data.data;
}

export const carFetch = async ()=>{
   const response = await fetch('http://localhost:3000/api/cars')
   const data =await response.json()
   return data
  
}


