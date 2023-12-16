import { RouteObject } from "react-router/dist/lib/context";
import { lazy } from "react";

const BasketPage = lazy(() => import("./BasketPage/BasketPage"));

export const routeBasket: RouteObject[] = [
  {
    path: "basket",
    element: <BasketPage />,
  },
];
