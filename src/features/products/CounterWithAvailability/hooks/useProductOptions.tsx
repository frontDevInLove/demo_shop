import { useMemo } from "react";
import { Product, ProductItem, Size } from "@/entities/products/models";

type ProductOptions = {
  product?: Product;
  position?: ProductItem;
  selectedSize?: Size;
};

const useProductOptions = ({
  product,
  position,
  selectedSize,
}: ProductOptions) => {
  return useMemo(() => {
    if (!product || !position) return null;

    return {
      productId: product.id,
      name: product.name,
      positionId: position.id,
      color: position.name,
      preview: position.images[0],
      size: selectedSize,
      price: `${position.price}₽`,
    };
  }, [selectedSize, position, product]);
};

export default useProductOptions;
