import { Product, Size } from "@/entities/products/models";

const ClearProducts: Product[] = [
  {
    id: 1,
    name: "Футболка",
    colors: [
      {
        id: 1,
        name: "черный",
        images: ["/images/1/black_front.png", "/images/1/black_back.png"],
        price: "123.00",
        description: 'Описание для "Футболка черный"',
        sizes: [1, 2, 3],
      },
      {
        id: 2,
        name: "белый",
        images: ["/images/1/white_front.png", "/images/1/white_back.png"],
        price: "125.00",
        description: 'Описание для "Футболка белый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 3,
        name: "серый",
        images: ["/images/1/gray_front.png", "/images/1/gray_back.png"],
        price: "120.00",
        description: 'Описание для "Футболка серый"',
        sizes: [],
      },
    ],
  },

  {
    id: 2,
    name: "Майка",
    colors: [
      {
        id: 1,
        name: "желтый",
        images: ["/images/2/yellow_front.png", "/images/2/yellow_back.png"],
        price: "88.00",
        description: 'Описание для "Майка желтый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 2,
        name: "синий",
        images: ["/images/2/blue_front.png", "/images/2/blue_back.png"],
        price: "89.00",
        description: 'Описание для "Майка синий"',
        sizes: [2],
      },
      {
        id: 3,
        name: "черный",
        images: ["/images/2/black_front.png", "/images/2/black_back.png"],
        price: "90.00",
        description: 'Описание для "Майка черный"',
        sizes: [],
      },
    ],
  },
];

const decorateProductImagesForGitHubPages = (
  products: Product[],
  baseRoute: string,
): Product[] => {
  if (baseRoute === "/") {
    return products; // Если baseRoute равен '/', возвращаем исходный массив
  }

  return products.map((product) => ({
    ...product,
    colors: product.colors.map((color) => ({
      ...color,
      images: color.images.map((image) => baseRoute + image),
    })),
  }));
};

const baseRoute = import.meta.env.VITE_APP_ROUTE || "/";
export const products = decorateProductImagesForGitHubPages(
  ClearProducts,
  baseRoute,
);

export const sizes: Size[] = [
  { id: 1, label: "XS", number: 44 },
  { id: 2, label: "S", number: 46 },
  { id: 3, label: "M", number: 48 },
  { id: 4, label: "L", number: 50 },
  { id: 5, label: "XL", number: 52 },
];
