type ImageType ={
 id:number;
 url:string;
}

export interface ProductsType{
id:number    
title:string;
company:string;
price:number;
capacity:string;
transmission:string;
milage:string;
images:ImageType[];
thumbnail:{
    url:string 
}
slug: string

}