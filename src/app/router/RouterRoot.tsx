import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { routeProducts } from "@/pages/Products/routeProducts";
import { routeBasket } from "@/pages/Basket/routeBasket";
import AppLayout from "@/shared/layouts/AppLayout/AppLayout";
import { FC } from "react";

const baseRoute = import.meta.env.VITE_APP_ROUTE || "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/catalog" replace={true} />,
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [...routeProducts, ...routeBasket],
    },
    {
      path: "*",
      element: <Navigate to="/catalog" replace={true} />,
    },
  ],
  { basename: baseRoute },
);

interface Props {}

const RouterRoot: FC<Props> = () => {
  return <RouterProvider router={router} />;
};

export default RouterRoot;
