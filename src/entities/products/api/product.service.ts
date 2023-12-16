// Получить список продуктов
import { Product, Size } from "@/entities/products/models";
import { products, sizes } from "@/entities/products/api/mock";

export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1250);
  });
};

export const fetchProduct = (id: Product["id"]): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id == id);

      if (product) {
        resolve(product);
      } else {
        reject(new Error("getProduct: Product not found"));
      }
    }, 250);
  });
};

export const fetchSizes = async (): Promise<Size[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sizes), 250);
  });
};
