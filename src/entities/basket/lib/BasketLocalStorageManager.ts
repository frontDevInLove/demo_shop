import { BasketItem } from "@/entities/basket/models";

// Класс для управления хранением продуктовой корзины в локальном хранилище.
export class BasketLocalStorageManager {
  // Ключ, по которому будут сохраняться и получаться данные из локального хранилища.
  private key = "cartItems";

  constructor() {}

  // Метод для сохранения элементов корзины в локальное хранилище.
  saveItems(items: BasketItem): void {
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  // Метод для получения элементов корзины из локального хранилища.
  getItems(): BasketItem {
    const storedItems = localStorage.getItem(this.key);
    // Если есть сохраненные элементы, парсим их из JSON, иначе возвращаем пустой объект.
    return storedItems ? JSON.parse(storedItems) : {};
  }
}
