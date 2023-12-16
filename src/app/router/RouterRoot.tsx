import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { routeProducts } from "@/pages/Products/routeProducts";
import { routeBasket } from "@/pages/Basket/routeBasket";
import AppLayout from "@/shared/layouts/AppLayout/AppLayout";
import { FC } from "react";
const router = createBrowserRouter([
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
]);

interface Props {}

const RouterRoot: FC<Props> = () => {
  return <RouterProvider router={router} />;
};

export default RouterRoot;
