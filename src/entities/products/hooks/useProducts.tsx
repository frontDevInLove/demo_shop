import { useQuery } from "react-query";
import { Product } from "@/entities/products/models";
import { fetchProducts } from "@/entities/products/api/product.service";

export const useProducts = () => {
  return useQuery<Product[]>("products", fetchProducts);
};
