import { Size } from "@/entities/products/models";

export type BasketCart = {
  productId: number;
  name: string;
  positionId: number;
  color: string;
  preview: string;
  size?: Size;
  price: string;
};
