import { RouteObject } from "react-router/dist/lib/context";
import { lazy } from "react";
import ProductsPage from "./ProductsPage/ProductsPage";

const ProductDetailPage = lazy(
  () => import("./ProductDetailPage/ProductDetailPage"),
);

export const routeProducts: RouteObject[] = [
  {
    path: "catalog",
    children: [
      {
        path: "",
        element: <ProductsPage />,
      },
      {
        path: ":productId/position/:positionId",
        element: <ProductDetailPage />,
      },
    ],
  },
];
