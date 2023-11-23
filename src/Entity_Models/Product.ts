import { CategoryProduct } from "./Category";

export type ProductDTO ={
   id:number;
   name:string;
   valor:number;
   imgUrl:string;
   description:string;
   Category: CategoryProduct[];

};