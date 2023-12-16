import { ProductItem, Size } from "../../entities/products/models";
import { products, sizes } from "@/entities/products/api/mock";

function getSize(id: number): Promise<Size> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const size = sizes.find((size) => size.id == id);
      if (size) {
        resolve(size);
      } else {
        reject(new Error("getSize: Size not found"));
      }
    }, 250);
  });
}

function getProductColor(
  productID: number,
  colorID: number,
): Promise<ProductItem> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id == productID);

      if (!product) {
        return reject(new Error("getProductColor: Product not found"));
      }

      const color = product.colors.find((color) => color.id == colorID);

      if (color) {
        resolve(color);
      } else {
        reject(new Error("getProductColor: Color not found"));
      }
    }, 250);
  });
}

export { getSize, getProductColor };
