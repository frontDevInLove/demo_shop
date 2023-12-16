import { createContext, FC, ReactNode } from "react";
import { computed, makeAutoObservable } from "mobx";

import { BasketItem, BasketCart } from "@/entities/basket/models";
import { BasketLocalStorageManager } from "@/entities/basket/lib/BasketLocalStorageManager";

class CartStore {
  items: BasketItem;

  private cacheManager = new BasketLocalStorageManager();

  constructor() {
    makeAutoObservable(this);

    this.items = this.cacheManager.getItems();
  }

  // Геттер для подсчета общего количества товаров в корзине
  @computed
  get itemCount(): number {
    return Object.values(this.items).reduce(
      (total, item) => total + item.quantity,
      0,
    );
  }

  addToCart(cart: Required<BasketCart>) {
    const { productId, positionId, size } = cart;
    const key = JSON.stringify({ productId, positionId, size });

    if (this.items[key]) {
      this.items[key].quantity++;
    } else {
      this.items[key] = {
        cart: cart,
        quantity: 1,
      };
    }

    this.items = {
      ...this.items,
    };

    this.cacheManager.saveItems(this.items);
  }

  removeFromCart(cart: Required<BasketCart>) {
    const { productId, positionId, size } = cart;
    const key = JSON.stringify({ productId, positionId, size });

    if (!this.items[key]) return;

    if (this.items[key].quantity === 1) {
      delete this.items[key];
    } else {
      this.items[key].quantity--;
    }

    this.items = {
      ...this.items,
    };

    this.cacheManager.saveItems(this.items);
  }

  removeAllQuantityFromCart(cart: Required<BasketCart>) {
    const { productId, positionId, size } = cart;
    const key = JSON.stringify({ productId, positionId, size });

    if (!this.items[key]) return;

    delete this.items[key];

    this.items = {
      ...this.items,
    };

    this.cacheManager.saveItems(this.items);
  }
}

export const cartStore = new CartStore();

export const CartStoreContext = createContext<CartStore>(cartStore);

export const CartStoreProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <CartStoreContext.Provider value={cartStore}>
      {children}
    </CartStoreContext.Provider>
  );
};
