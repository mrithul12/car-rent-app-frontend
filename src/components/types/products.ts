type ImageType ={
 id:number;
 url:string;
}

export interface ProductsType{
id:number    
title:string;
company:string;
price:number |undefined
capacity:string;
transmission:string;
milage:string;
images:ImageType[];
thumbnail:{
    url:string 
}
slug: string

}


export type Car  = {
  id: number;
  brand: string;
  model: string;
  year: number;
  type: string;
  pricePerDay: number;
  fuelType: string;
  seats: number;
  transmission: string;
  image:string;
};