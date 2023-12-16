import { Product } from "@/entities/products/models";
import { useQuery } from "react-query";
import { fetchProduct } from "@/entities/products/api/product.service";

// Хук для получения продукта по идентификатору
export const useProduct = (productId: Product["id"]) => {
  return useQuery(["product", productId], () => fetchProduct(productId));
};
