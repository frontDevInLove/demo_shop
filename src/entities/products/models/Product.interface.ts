import { ProductItem } from "./ProductItem.interface";

export interface Product {
  id: number;
  name: string;
  colors: ProductItem[];
}
