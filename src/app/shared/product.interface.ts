import {Category} from "./category.interface";

export interface Product {
  name: string,
  description: string,
  quantity: number,
  price: number,
  weight: number,
  // category: Category
}
