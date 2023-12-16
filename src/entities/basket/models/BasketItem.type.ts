// Тип для элементов корзины
import { BasketCart } from "@/entities/basket/models/BasketCart.interface";

export type BasketItem = Record<
  string,
  {
    cart: Required<BasketCart>;
    quantity: number;
  }
>;
